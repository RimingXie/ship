import React from 'react';
import classNames from 'classnames';

export interface RadioProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * 单选框。
 * ```
 * import { Radio } from 'ship-ui'
 * ```
 */
export const Rodia: React.FC<RadioProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('radio', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Rodia;