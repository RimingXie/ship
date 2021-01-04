import React from 'react';
import classNames from 'classnames';
import RcSelect, { SelectProps as RcSelectProps } from 'rc-select';
import Icon from '../Icon';
const prefixCls = 'ship-select'

export type SelectSizes = 'large' | 'default' | 'small'
export interface SelectProps extends RcSelectProps {
  size?: SelectSizes
}

/**
 * 下拉选择器。
 * 
 * ```js
 * import { Select } from 'ship-ui'
 * ```
 */
export const Select: React.FC<SelectProps> = (props) => {
  const { className, children, size, ...others } = props
  const classes = classNames(className, {
    [`${prefixCls}-sm`]: size === "small",
    [`${prefixCls}-lg`]: size === "large",
  })
  return (
    <RcSelect
      className={classes}
      inputIcon={<Icon icon="chevron-down" />}
      defaultActiveFirstOption
      prefixCls={prefixCls}
      {...others}
    >
      {children}
    </RcSelect>
  )
}

export default Select;