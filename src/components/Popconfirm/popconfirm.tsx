import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ButtonProps, ButtonType } from '../Button/button';

type titleType = () => ReactNode
export interface PopconfirmProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'>{
  /** cancel 按钮 props	 */
  cancelButtonProps: ButtonProps;
  /** 取消按钮文字 */
  cancelText: ReactNode;
  /** 阻止点击 Popconfirm 子元素时弹出确认框 */
  disabled: boolean;
  /** 自定义弹出气泡 Icon 图标 */
  icon: ReactNode;
  /** ok 按钮 props */
  okButtonProps: ButtonProps;
  /** 确认按钮文字 */
  okText: ReactNode;
  /** 确认按钮类型 */
  okType: ButtonType;
  /** 确认框的描述 */
  title: ReactNode | titleType;
  /** 点击取消的回调 */
  onCancel:(e: React.MouseEvent<HTMLElement>) => void;
  /** 点击确认的回调 */
  onConfirm:(e: React.MouseEvent<HTMLElement>) => void;
}

/**
 * # 气泡确认框
 * 点击元素，弹出气泡式的确认框。
 * 
 * ```js
 * import { Popconfirm } from 'ship-ui'
 * ```
 */
export const Popconfirm: React.FC<PopconfirmProps> = (props) => {
  const {className} = props
  const classes = classNames('nopconfirm', className, {

  })
  return (
    <div className={classes} >1234</div>
  )
}

export default Popconfirm;