import React, { ReactNode } from 'react';
import classNames from 'classnames';
import RcSwitch from 'rc-switch';
import Icon from '../Icon';

const prefixCls = 'ship-switch'

export type SwitchSizeType = 'default' | 'small';
export type SwitchChangeEventHandler = (checked: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
export interface SwitchProps {
  /** 组件自动获取焦点 */
  autoFocus?: boolean;
  /** 指定当前是否选中 */
  checked?: boolean;
  /** 选中时的内容 */
  checkedChildren?: ReactNode;
  /** Switch 器类名 */
  className?: string;
  /** 初始是否选中 */
  defaultChecked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 加载中的开关 */
  loading?: boolean;
  /** 开关大小，可选值：default small */
  size?: SwitchSizeType;
  /** 非选中时的内容 */
  unCheckedChildren?: ReactNode;
  /** 变化时回调函数 */
  onChange?: SwitchChangeEventHandler;
  /** 点击时回调函数 */
  onClick?: SwitchChangeEventHandler;
}

/**
 * 开关选择器。
 * 
 * ```js
 * import { Switch } from 'ship-ui'
 * ```
 */
export const Switch: React.FC<SwitchProps> = (props) => {
  const { className, loading, size, ...others } = props
  const classes = classNames(className, {
    [`${prefixCls}-small`]: size === "small",
    [`${prefixCls}-loading`]: loading
  })
  const loadingIcon = (
    <div className={`${prefixCls}-handle`}>
      <span className="anticon anticon-loading anticon-spin ship-switch-loading-icon">
        {loading && <Icon className={`${prefixCls}-loading-icon`} icon="spinner" />}
      </span>
    </div>
  );
  return (
    <RcSwitch
      className={classes}
      prefixCls={prefixCls}
      loadingIcon={loadingIcon}
      {...others}
    />
  )
}

export default Switch;