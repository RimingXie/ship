import React from 'react';
import classNames from 'classnames';

export interface PopconfirmProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * # 气泡确认框
 * 点击元素，弹出气泡式的确认框。
 * ```
 * import { Popconfirm } from 'ship-ui'
 * ```
 */
export const Popconfirm: React.FC<PopconfirmProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('nopconfirm', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Popconfirm;