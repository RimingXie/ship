import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Notification from 'rc-notification'
import Icon from '../Icon/icon'

export interface NotificationProps extends React.HTMLAttributes<HTMLElement> {
  /** 通知窗类型 */
  type?: string;
  /** 自定义关闭按钮 */
  btn?: ReactNode;
  /** 消息从底部弹出时，距离底部的位置，单位像素 */
  bottom?: number;
  /** ReactNode 通知提醒内容，必选 */
  description: ReactNode;
  /** 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 */
  duration?: number;
  /** 配置渲染节点的输出位置 */
  getContainer?: HTMLElement;
  /** 自定义图标 */
  icon?: ReactNode;
  /** 当前通知唯一标志 */
  key?: string;
  /** 通知提醒标题，必选 */
  message: ReactNode;
  /** 点击默认关闭按钮时触发的回调函数 */
  onClose?: () => void;
  /** 点击通知时触发的回调函数 */
  onClick?: () => void;
  /** 消息从顶部弹出时，距离顶部的位置，单位像素 */
  top?: number;
  /** 自定义关闭图标 */
  closeIcon?: ReactNode;
  closable?: boolean;
}

type placementType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
export interface GlobalConfig {
  /** 消息从底部弹出时，距离底部的位置，单位像素， 默认24 */
  bottom?: number;
  /** 默认自动关闭延时，单位秒 */
  duration?: number;
  /** 配置渲染节点的输出位置，默认document.body */
  getContainer?: () => HTMLElement;
  /** 弹出位置，可选 topLeft topRight bottomLeft bottomRight */
  placement?: placementType;
  /** 消息从顶部弹出时，距离顶部的位置，单位像素 */
  top?: number;
  /** 自定义关闭图标 */
  closeIcon?: HTMLElement;
}

const iconType = {
  success: 'check-circle',
  warning: 'exclamation-triangle',
  info: 'info-circle',
  error: 'exclamation-circle'
}

export const xNotification = (function () {
  let notification: any = null
  const pop = (config: NotificationProps) => {
    const {
      type, bottom, className, description, duration = 4.5,
      getContainer = () => document.body, icon,
      key, message, onClose, onClick, top, closable = true, closeIcon
    } = config
    notification.notice({
      closable,
      duration: duration || 4.5,
      onClose: () => {
        console.log(112)
      },
      closeIcon: <Icon icon="times" />,
      content:
        <div className={classNames('xNotice', className)}>
          <div className={classNames('iconWrap', type)}>
            <Icon icon='check-circle' />
          </div>
          <div>
            <div className="xNoticeTit">
              {message}
            </div>
            <div className="xNoticeDesc">
              {description}
            </div>
          </div>
        </div>
    })
  }

  const config = (config: GlobalConfig) => {
    const { duration, getContainer, placement, closeIcon } = config
    Notification.newInstance({
      getContainer: getContainer,
      maxCount: 5,
      prefixCls: 'ship-',
      closeIcon
    }, (notice) => notification = notice)
  }

  if (notification) {
    return {
      config,
      pop
    }
  }
  // 如果为创建实例，则创建默认实例
  Notification.newInstance({}, (notice) => notification = notice)
  return {
    config,
    pop
  }
})()

export default xNotification;