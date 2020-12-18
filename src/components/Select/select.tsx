import React from 'react';
import classNames from 'classnames';

export interface SelectProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * 下拉选择器。
 * 
 * ```js
 * import { Select } from 'ship-ui'
 * ```
 */
export const Select: React.FC<SelectProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('select', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Select;