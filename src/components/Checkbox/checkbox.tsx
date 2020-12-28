import React from 'react';
import RcCheckBox, { Props as RcCheckBoxProps } from 'rc-checkbox';
import classNames from 'classnames';

const prefixCls = 'ship-checkbox'

export interface CheckboxProps extends RcCheckBoxProps {
  /** 自动获取焦点 */
  autoFocus?: boolean;
  /** 指定当前是否选中 */
  checked?: boolean;
  /** 初始是否选中 */
  defaultChecked?: boolean;
  /** 失效状态 */
  disabled?: boolean;
  /** 设置 indeterminate 状态，只负责样式控制 */
  indeterminate?: boolean;
  /** 变化时回调函数 */
  onChange?: (e: Event) => void;
}

/**
 * 多选框
 */
export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { className, children, indeterminate, ...orders } = props;
  const classes = classNames(`${prefixCls}-wrapper`, {

  }, className);
  const checkboxClass = classNames({
    [`${prefixCls}-indeterminate`]: indeterminate,
  });
  return (
    <label
      className={classes}
    >
      <RcCheckBox
        className={checkboxClass}
        prefixCls={prefixCls}
        {...orders}
      />
      <span>{children}</span>
    </label>

  )
}

export default Checkbox;