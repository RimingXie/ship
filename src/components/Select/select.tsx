import React from 'react';
import classNames from 'classnames';
import RcSelect, { Option as RcOption, SelectProps as RcSelectProps } from 'rc-select';
import Icon from '../Icon';
const prefixCls = 'ship-select'

export interface SelectProps extends RcSelectProps {
  
}

/**
 * 下拉选择器。
 * 
 * ```js
 * import { Select } from 'ship-ui'
 * ```
 */
export const Select: React.FC<SelectProps> = (props) => {
  const { className, ...others } = props
  const classes = classNames('select', className, {

  })
  return (
    <RcSelect
    inputIcon={<Icon icon="chevron-down" />}
      defaultActiveFirstOption
      prefixCls={prefixCls}
      {...others}
    >
      <RcOption value="jack">jack</RcOption>
      <RcOption value="lucy">lucy</RcOption>
      <RcOption value="yiminghe">yiminghe</RcOption>
    </RcSelect>
  )
}

export default Select;