import React from 'react';
import classNames from 'classnames';
import RCDrawer from 'rc-drawer';

export interface DrawerProps extends React.HTMLAttributes<HTMLElement> {

}

/**
 * 屏幕边缘滑出的浮层面板。
 * 
 * ```js
 * import { Drawer } from 'ship-ui'
 * ```
 */
export const Drawer: React.FC<DrawerProps> = (props) => {
  const { className, ...others } = props
  const classes = classNames('drawer', className, {

  })
  return (
    <RCDrawer>
      <div className={classes} {...others}>this is drawer</div>
    </RCDrawer>
  )
}

export default Drawer;