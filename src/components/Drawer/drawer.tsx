import React from 'react';
import classNames from 'classnames';

export interface DrawerProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * 屏幕边缘滑出的浮层面板。
 * ```
 * import { Drawer } from 'ship-ui'
 * ```
 */
export const Drawer: React.FC<DrawerProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('drawer', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Drawer;