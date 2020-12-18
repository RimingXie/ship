import React from 'react';
import classNames from 'classnames';

export interface TabsProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * 选项卡切换组件。
 * ```
 * import { Tabs } from 'ship-ui'
 * ```
 */
export const Tabs: React.FC<TabsProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('tabs', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Tabs;