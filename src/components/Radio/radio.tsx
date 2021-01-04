import React from 'react';
import classNames from 'classnames';
import RcCheckbox, { Props as RcProps } from 'rc-checkbox';

const prefixCls = 'ship-radio'

export interface RadioProps extends RcProps {
  /** 自动获取焦点  */
  autoFocus?: boolean;
  /** 指定当前是否选中 */
  checked?: boolean;
  /** 初始是否选中 */
  defaultChecked?: boolean;
  /** 禁用 Radio */
  disabled?: boolean;
  /** 根据 value 进行比较，判断是否选中 */
  value?: any;
  
}

/**
 * 单选框。
 * 
 * ```js
 * import { Radio } from 'ship-ui'
 * ```
 */
export const Radio: React.FC<RadioProps> = (props) => {
  const { className, checked, children, onChange, defaultChecked, style, type, disabled, ...order } = props;
  const [check, setCheck] = React.useState(defaultChecked)
  const optionsPrefixCls = type === 'button' ? `${prefixCls}-button` : prefixCls;
  const classes = classNames({
    [`${optionsPrefixCls}-checked`]: checked
  }, className)
  const handleChange = (e: Event) => {
    if (onChange) {
      onChange(e)
    } else {
      setCheck(e.target?.checked)
    }
  }
  const wrapperClass = classNames(`${optionsPrefixCls}-wrapper`, {
    [`${optionsPrefixCls}-wrapper-checked`]: checked && type === 'button',
    [`${optionsPrefixCls}-wrapper-disabled`]: disabled && type === 'button',
  })
  return (
    <label style={style} className={wrapperClass}>
      <RcCheckbox
        prefixCls={optionsPrefixCls}
        className={classes}
        checked={check}
        type="radio"
        onChange={handleChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        {...order}
      />
      <span>{children}</span>
    </label>
  )
}

Radio.displayName = 'radio'

export default Radio;