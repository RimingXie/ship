import React from 'react';
import classNames from 'classnames';

export interface SwitchProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * 开关选择器。
 * ```
 * import { Switch } from 'ship-ui'
 * ```
 */
export const Switch: React.FC<SwitchProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('switch', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Switch;