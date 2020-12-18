import React from 'react';
import classNames from 'classnames';

export interface CheckBoxProps {
  /** 自动获取焦点 */
  autoFocus?: boolean,
  /** 指定当前是否选中 */
  checked?: boolean,
  /** 初始是否选中 */
  defaultChecked?: boolean,
  /** 失效状态 */
  disabled?: boolean,
  /** 设置 indeterminate 状态，只负责样式控制 */
  indeterminate?: boolean,
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 变化时回调函数 */
  onChange?: (value: boolean) => void
}

/**
 * 多选框。
 */
export const Checkbox: React.FC<CheckBoxProps> = (props) => {
  const { children, className, style, checked, autoFocus, defaultChecked, disabled, indeterminate, onChange } = props

  const [inputChecked, setChecked] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    if (autoFocus && inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus]);
  React.useEffect(() => {
    checkboxChange(null)
  })
  const checkboxChange = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    let check = checked === undefined ? defaultChecked : checked
    if (e && checked !== undefined) {
      check = e.target.checked
      if (onChange) {
        onChange(check)
      }
    }
    check = check === undefined ? false : check
    setChecked(check)
  }
  const labelClasses = classNames('checkbox-wrapper', className, {
    'wrapper-disabled': disabled
  })
  const checkboxClasses = classNames('checkbox', {
    'checkbox-checked': inputChecked,
    'checkbox-disabled': disabled,
    'checkbox-indeterminate': indeterminate,
  })
  return (
    <label className={labelClasses} style={style}>
      <span className={checkboxClasses}>
        <input
          checked={inputChecked}
          ref={inputRef}
          type="checkbox"
          className="checkbox-input"
          onChange={checkboxChange}
        />
        <span className="checkbox-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  )
}

Checkbox.defaultProps = {

}

export default Checkbox;