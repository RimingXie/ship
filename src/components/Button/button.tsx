import React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'df' | 'sm'

// export enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm'
// }

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link'
// }

interface BaseButtonProps {
  /** 自定义classname */
  className?: string;
  /** 是否为不可用状态 */
  disabled?: boolean;
  /** 设置button的尺寸大小 */
  size?: ButtonSize,
  /** 设置button的类型 */
  btnType?: ButtonType;
  /** button 的内容 */
  children: React.ReactNode,
  /** 设置超连接，btnType为link时可用 */
  href?: string,
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 按钮用于开始一个即时操作<br />
 * 
 * ```js
 *  import { Button } from 'ship-ui'
 * ```
 */
export const Button: React.FC<ButtonProps> = ({ btnType, disabled, size, children, href, className, ...restProps }) => {
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size && size !== 'df',
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  size: 'df'
}

export default Button;