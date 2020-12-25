import React from 'react';
import Notification from 'rc-notification';
import Icon from '../Icon/icon'
import classNames from 'classnames'
import { IconName } from '@fortawesome/fontawesome-svg-core';

let notification: any = {};
let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultCloseIcon: React.ReactNode = <Icon icon="times" />;
const prefixCls: string = 'ship-notification';

export type PlacementType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export type IconType = 'success' | 'info' | 'error' | 'warning';

export interface ArgsProps {
  /** 通知提醒标题，必选 */
  message: React.ReactNode;
  /** 通知提醒内容，必选 */
  description?: React.ReactNode;
  /** 当前通知唯一标志 */
  key?: string;
  /** 当通知关闭时触发 */
  onClose?: () => void;
  /** 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 */
  duration?: number | null;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` */
  placement?: PlacementType;
  /** 自定义内联样式 */
  style?: React.CSSProperties;
  /** 自定义 CSS class */
  className?: string;
  /** */
  readonly type?: IconType;
  /** 点击通知时触发的回调函数 */
  onClick?: () => void;
  /** 消息从顶部弹出时，距离顶部的位置，单位像素 */
  top?: number;
  /** 消息从底部弹出时，距离底部的位置，单位像素 */
  bottom?: number;
  /** 配置渲染节点的输出位置 */
  getContainer?: () => HTMLElement;
  /** 自定义关闭图标 */
  closeIcon?: React.ReactNode | IconName;
}

function getPlacementStyle(
  placement: PlacementType,
  top: number = defaultTop,
  bottom: number = defaultBottom,
) {
  let style;
  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top,
        bottom: 'auto',
      };
      break;
    case 'topRight':
      style = {
        right: 0,
        top,
        bottom: 'auto',
      };
      break;
    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom,
      };
      break;
    default:
      style = {
        right: 0,
        top: 'auto',
        bottom,
      };
      break;
  }
  return style;
}

const setNotificationInstance = (args: ArgsProps) => {
  const post = args.placement || 'topRight'
  if (!notification[post]) {

    const classes = classNames(args.className, `${prefixCls}-${post}`)

    Notification.newInstance({
      prefixCls,
      style: getPlacementStyle(post, args.top, args.bottom),
      className: classes,
      getContainer: args.getContainer ? args.getContainer : () => document.body,
    }, (notice) => notification[post] = notice)
  }
}

const getRCNoticeProps = (args: ArgsProps) => {
  let iconNode: React.ReactNode = null;
  if (args.icon) {
    iconNode = <span className={`${prefixCls}-notice-icon`}>{args.icon}</span>
  } else if (args.type) {
    const classes = classNames(`${prefixCls}-notice-icon`, 'anticon', `${prefixCls}-notice-icon-${args.type}`)
    iconNode = <span className={classes}>
      {
        args.type === 'info' && <Icon icon="info-circle" />
      }
      {
        args.type === 'success' && <Icon icon="check-circle" />
      }
      {
        args.type === 'error' && <Icon icon="exclamation-triangle" />
      }
      {
        args.type === 'warning' && <Icon icon="exclamation-triangle" />
      }
    </span>
  }
  return (
    <div className={`${prefixCls}-notice-content`}>
      <div className={iconNode ? `${prefixCls}-notice-with-icon` : ''} role="alert">
        {iconNode}
        <div className={`${prefixCls}-notice-message`}>{args.message}</div>
        <div className={`${prefixCls}-notice-description`}>{args.description}</div>
      </div>
    </div>
  )
}

const api: any = {
  open: (args: ArgsProps) => {
    setNotificationInstance(args);
    const { closeIcon, getContainer } = args;
    if (typeof closeIcon === 'string') {
      defaultCloseIcon = <Icon icon={closeIcon as IconName} />
    } else if (closeIcon) {
      defaultCloseIcon = closeIcon
    }
    const post = args.placement || 'topRight'
    notification[post].notice({
      closable: true,
      duration: args.duration === undefined ? defaultDuration : args.duration,
      closeIcon: defaultCloseIcon,
      getContainer,
      onClick: args.onClick,
      onClose: args.onClose,
      content: getRCNoticeProps(args),
      style: args.style
    });
  }
};

['success', 'info', 'warning', 'error'].forEach(type => {
  api[type] = (args: ArgsProps) =>
    api.open({
      ...args,
      type,
    });
});
api.warn = api.warning;

export interface NotificationApi {
  success(args: ArgsProps): void;
  error(args: ArgsProps): void;
  info(args: ArgsProps): void;
  warning(args: ArgsProps): void;
  open(args: ArgsProps): void;
  warn(args: ArgsProps): void;
}

export default api as NotificationApi;