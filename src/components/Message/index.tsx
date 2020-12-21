import React, { CSSProperties, ReactNode } from 'react'
import Notification from 'rc-notification';
import Icon from '../Icon/icon'
import classNames from 'classnames'

let notification: any = null;
let defaultDuration = 3;
let prefixCls: string = 'ship-message';

export type MessageType = 'info' | 'success' | 'warning' | 'error';
type ConfigDuration = number | (() => void);

export interface ArgsProps {
  /** 自定义 CSS class */
  className?: string;
  /** 提示类型 */
  type?: MessageType;
  /** 提示内容 */
  content: ReactNode;
  /** 自动关闭的延时，单位秒。设为 0 时不自动关闭 */
  duration?: number | null;
  /** 自定义图标 */
  icon?: ReactNode;
  /** 当前提示的唯一标志 */
  key?: string | number;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 关闭时触发的回调函数	 */
  onClose?: () => void;
  maxCount?: number;
}

const setNotificationInstance = (args: ArgsProps) => {
  if (!notification) {
    Notification.newInstance({
      prefixCls,
      style: {},
      transitionName:'move-up',
      maxCount: args.maxCount || 5,
      getContainer: () => document.body,
    }, (notice) => notification = notice)
  }
}

const getRCNoticeProps = (args: ArgsProps) => {
  const classes = classNames(`${prefixCls}-custom-content`, {
    [`${prefixCls}-${args.type}`]: args.type
  });
  return (
    <div className={classes}>
      <span className="anticon anticon-check-circle">
      {
        args.type === 'info' ? <Icon icon="info-circle" /> :
        args.type === 'success' ? <Icon icon="check-circle" /> :
        args.type === 'error' ? <Icon icon="exclamation-triangle" /> :
        args.type === 'warning' ? <Icon icon="exclamation-triangle" /> : null
      }
      </span>
      <span>{args.content}</span>
    </div>
  )
}

const api: any = {
  open: (args: ArgsProps) => {
    setNotificationInstance(args);
    notification.notice({
      closable: false,
      duration: args.duration === undefined ? defaultDuration : args.duration,
      onClose: args.onClose,
      style: args.style || {},
      className: args.className,
      key: args.key,
      content: getRCNoticeProps(args)
    });
  }
};

['info', 'success', 'warning', 'error'].forEach(type => {
  api[type] = (content: ReactNode, duration?: ConfigDuration, onClose?: () => void) => {
    let extendObject: ArgsProps = {
      content
    }
    if (typeof duration === 'function') {
      extendObject.onClose = duration
    } else {
      if (typeof duration !== 'undefined') {
        extendObject.duration = duration
      }
      if (typeof onClose === 'function') {
        extendObject.onClose = onClose
      }
    }
    api.open({
      ...extendObject,
      type
    })
  }
})

api.warn = api.warning;

export interface MessageInstance {
  info(content: ReactNode, duration?: ConfigDuration, onClose?: () => void): void;
  success(content: ReactNode, duration?: ConfigDuration, onClose?: () => void): void;
  warning(content: ReactNode, duration?: ConfigDuration, onClose?: () => void): void;
  warn(content: ReactNode, duration?: ConfigDuration, onClose?: () => void): void;
  error(content: ReactNode, duration?: ConfigDuration, onClose?: () => void): void;
  open(config: ArgsProps): void;
}

export default api as MessageInstance;