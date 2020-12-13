import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
export interface MenuItemProps {
  /*
  * 被选中item的index
  */
  index?: string;
  /**
   * 设置item是否为可用
   */
  disabled?: boolean;
  /**
   * 设置自定义classname
   */
  className?: string;
  /**
   * 设置自定义样式
   */
  style?: React.CSSProperties
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>{children}</li>
  )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem;