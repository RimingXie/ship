import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon'

const prefixCls = 'ship-alert'

export type AlertType = 'success' | 'info' | 'warning' | 'error'

interface BaseAlertProps extends React.HTMLAttributes<HTMLElement> {
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
  /** 是否显示辅助图标 */
  showIcon?: boolean;
  /** 自定义图标，showIcon 为 true 时有效 */
  icon?: ReactNode;
}

export type AlertProps = BaseAlertProps;

/**
 * 警告提示，展现需要关注的信息。
 * 
 * # 何时使用
 * 当某个页面需要向用户显示警告的信息时。<br />
 * 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。<br />
 * 
 * ```js
 *  import {Alert} from 'ship-ui'
 * ```
 */
export const Alert: React.FC<BaseAlertProps> = (props) => {
  const { message, description, type, className, closable, closeText, style, showIcon, icon } = props;
  const [closed, setClosed] = useState(false)

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClosed(true);
    props.onClose?.(e);
  }
  const renderCloseIcon = () => {
    return closable || closeText ? (

      <button
        className={`${prefixCls}-close-icon`}
        type="button"
        onClick={handleClose}
      >
        {
          closeText ? (
            <span className={`${prefixCls}-close-text`}>{closeText}</span>
          ) :
            <span className="anticon"><Icon icon="times" theme="light" /></span>
        }
      </button>
    ) : null
  }
  const renderIcon = () => {
    if (!showIcon) return;
    if (icon) return icon;

    switch (type) {
      case 'info':
        return <Icon icon="info-circle" />
      case 'success':
        return <Icon icon="check-circle" />
      case 'error':
        return <Icon icon="exclamation-circle" />
      default:
        return <Icon icon="exclamation-triangle" />
    }

  }
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-with-description`]: description,
    [`${prefixCls}-${type}`]: type
  })
  return closed ? null : (
    <div
      style={style}
      className={classes}
    >
      {
        showIcon &&
        <span className={classNames("anticon", `${prefixCls}-icon`)}>{renderIcon()}</span>
      }
      <div className={`${prefixCls}-content`}>
        <span className={`${prefixCls}-message`}>{message}</span>
        <span className={`${prefixCls}-description`}>{description}</span>
      </div>

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