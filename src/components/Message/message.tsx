import React from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import Icon from '../Icon/icon'

let key = 1;
let NoticeList: any[] = []
const popup = document.createElement("div");
document.body.appendChild(popup);

type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface ArgsProps {
  /** 提示内容 */
  content: React.ReactNode;
  /** 自动关闭的延时，单位秒。设为 0 时不自动关闭 */
  duration: number | null;
  /** 关闭时触发的回调函数 */
  onClose?: () => void;
  /** 当前提示的唯一标志 */
  key?: string | number;
  /** 提示类型 */
  type?: NoticeType;
}

/** `config` 对象属性 */
export interface ConfigOptions {
  /** 提示内容 */
  content: React.ReactNode;
  /** 消息距离顶部的位置 */
  top?: number;
  /** 默认自动关闭延时，单位秒 */
  duration?: number;
  /** 配置渲染节点的输出位置 */
  getContainer?: () => void;
  transitionName?: string;
  /** 最大显示数, 超过限制时，最早的消息会被自动关闭 */
  maxCount?: number;
  /** 是否开启 RTL 模式 */
  rtl?: boolean;
  /** 自定义内联样式 */
  style?: React.CSSProperties;
  /** 自定义 CSS class */
  className?: string;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 提示类型 */
  type?: NoticeType;
  /** 关闭时触发的回调函数 */
  onClose?: () => void;
}

type ConfigContent = React.ReactNode | string;
type ConfigDuration = number | (() => void);
type JointContent = ConfigContent | ArgsProps;

export interface MessageProps extends React.HTMLAttributes<HTMLElement> {

}

export interface MessageType {
  (): void;
  then: (fill: ThenableArgument, reject: ThenableArgument) => Promise<void>;
  promise: Promise<void>;
}

/**
 * 全局展示操作反馈信息。
 * ```
 * import { Message } from 'ship-ui'
 * ```
 */
export const Message: React.FC<MessageProps> = (props) => {
  const { className, ...others } = props
  const classes = classNames('message', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export type ConfigOnClose = () => void;

export interface ThenableArgument {
  (val: any): void;
}

export interface MessageType {
  (): void;
  then: (fill: ThenableArgument, reject: ThenableArgument) => Promise<void>;
  promise: Promise<void>;
}

export interface MessageInstance {
  info(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  success(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  error(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  warning(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  loading(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  open(args: ArgsProps): MessageType;
}

export interface MessageApi extends MessageInstance {
  warn(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  config(options: ConfigOptions): void;
  destroy(messageKey?: React.Key): void;
  useMessage(): [MessageInstance, React.ReactElement];
}


function notice(args: ArgsProps): MessageType {
  const target = args.key || key++;
  const closePromise = new Promise(resolve => {
    createUseMessage(args, target)
  });
  const result: any = () => {

  };
  result.then = (filled: ThenableArgument, rejected: ThenableArgument) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

const setMessageConfig = (options: ConfigOptions) => {
  console.log(options)
}

function isArgsProps(content: JointContent): content is ArgsProps {
  return (
    Object.prototype.toString.call(content) === '[object Object]' &&
    !!(content as ArgsProps).content
  );
}

const api: any = {
  open: notice,
  config: setMessageConfig
}

export function attachTypeApi(originalApi: any, type: string) {
  originalApi[type] = (
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose,
  ) => {
    if (isArgsProps(content)) {
      return originalApi.open({ ...content, type });
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({ content, duration, type, onClose });
  };
}

['success', 'info', 'warning', 'error', 'loading'].forEach(type => attachTypeApi(api, type));
api.warn = api.warning;

const getMessageNotice = (args: ArgsProps, target: React.ReactText) => {
  const classes = classNames('message-custom-content', {
    [`message-${args.type}`]: args.type
  })
  return (
    <div className="message-notice" id={`message-notice-${target}`}>
      <div className="message-notice-content">
        <div className={classes}>
          <span className="anticon anticon-info-circle">
            {args.type === 'info' && <Icon icon="info-circle" />}
            {args.type === 'warning' && <Icon icon="exclamation-circle" />}
            {args.type === 'success' && <Icon icon="check-circle" />}
            {args.type === 'error' && <Icon icon="exclamation-circle" />}
          </span>
          <span>{args.content}</span>
        </div>
      </div>
    </div>
  )
}

export function createUseMessage(args: ArgsProps, target: React.ReactText) {

  NoticeList.push({
    key: target,
    element: getMessageNotice(args, target)
  })
  console.log(args)
  const msgDom = (
    <div className="message">
      {
        NoticeList && NoticeList.length > 0 &&
        NoticeList.map(item => item.element)
      }
    </div>
  )
  ReactDOM.render(msgDom, popup)
  if (args.duration !== 0) {
    setTimeout(() => {
      NoticeList = NoticeList.filter(item => item.key !== target)
      const targetDom = document.getElementById(`message-notice-${target}`)
      if(targetDom && targetDom.parentElement){
        targetDom!.parentElement.removeChild(targetDom);
      }
      if(args.onClose){
        args.onClose()
      }
    }, args.duration ? args.duration * 1000 : 3000);
  }

}

export default api as MessageApi;