import React from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import Icon from '../Icon/icon'

let key = 1;

type ConfigContent = React.ReactNode | string;
type ConfigDuration = number | (() => void);
export type ConfigOnClose = () => void;
type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

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

export interface MessageApi {
  info(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): void;
  success(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): void;
  error(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): void;
  warning(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): void;
  loading(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): void;
  config(options: ConfigOptions): void;
}

export interface ThenableArgument {
  (val: any): void;
}

export interface MessageType {
  (): void;
  then: (fill: ThenableArgument, reject: ThenableArgument) => Promise<void>;
  promise: Promise<void>;
}

function isArgsProps(content: ConfigContent): content is ConfigOptions {
  return (
    Object.prototype.toString.call(content) === '[object Object]' &&
    !!(content as ConfigOptions).content
  );
}

function notice(args: ConfigOptions): void {
  const element = <div className="main">
    <SwitchTransition mode={'in-out'}>
      <CSSTransition
        key={key}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
      >
        <div className="button-container">
          <button className="btn btn-primary">
            Hello, world
            </button>
        </div>
      </CSSTransition>
    </SwitchTransition>
  </div>
  let div = document.createElement('div')
  ReactDOM.render(element, div)
  document.body.appendChild(div)

  console.log(args)
}

const api: any = {
  open: notice,
  config: () => { },
}

export function attachTypeApi(originalApi: any, type: string) {
  originalApi[type] = (
    content: ConfigContent,
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

export default api as MessageApi;