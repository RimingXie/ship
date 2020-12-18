import React from 'react';
import classNames from 'classnames';

export interface NotificationProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * # 通知提醒框
 * 全局展示通知提醒信息。
 * ```
 * import { Notification } from 'ship-ui'
 * ```
 */
export const Notification: React.FC<NotificationProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('notification', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Notification;