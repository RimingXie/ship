import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon'

// export enum AlertType {
//   Success = 'success',
//   Info = 'info',
//   Warning = 'warning',
//   Error = 'error',
// }

export type AlertType = 'success' | 'info' | 'warning' | 'error'

interface BaseAlertProps {
  /** 设置警告提示内容 */
  message: string;
  /** 设置警告提示的辅助性文字介绍 */
  description?: string;
  /** 设置指定警告提示的样式，有四种选择 */
  type?: AlertType;
  /** 设置自定义classname */
  className?: string;
  /** 设置默认不显示关闭按钮 */
  closable?: boolean;
  /** 设置自定义关闭按钮 */
  closeText?: string;
  /** 设置关闭时触发的回调函数 */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export type AlertProps = BaseAlertProps;

/**
 * 警告提示，展现需要关注的信息。
 * 
 * # 何时使用
 * 当某个页面需要向用户显示警告的信息时。<br />
 * 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。<br />
 * 
 * ``` 
 *  import {Alert} from 'ship-ui'
 * ```
 */
export const Alert: React.FC<BaseAlertProps> = (props) => {
  const { message, description, type, className, closable, closeText } = props;
  const [closed, setClosed] = useState(false)

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClosed(true);
    props.onClose?.(e);
  }
  const renderCloseIcon = () => {
    return closable ? (
      <button
        className="alert-close-icon"
        type="button"
        onClick={handleClose}
      >
        {
          closeText ? (
            <span className="alert-close-text">{closeText}</span>
          ) :
            <Icon icon="times-circle" theme="light" />
        }
      </button>
    ) : null
  }
  const classes = classNames('alert', className, {
    'alert-with-description': description,
    [`alert-${type}`]: type
  })
  return closed ? null : (
    <div
      className={classes}
    >
      <span className="alert-message">{message}</span>
      <span className="alert-description">{description}</span>
      {
        renderCloseIcon()
      }
    </div>
  )
}

Alert.defaultProps = {
  type: 'info',
}

export default Alert;