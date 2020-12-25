import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import Button, { ButtonProps, ButtonType } from '../Button/button';
import Tooltip from 'rc-tooltip';
import Icon from '../Icon';

const prefixCls = 'ship-popover';

type titleType = () => ReactNode

export type TooltipPlacement =
  'top' |
  'left' |
  'right' |
  'bottom' |
  'topLeft' |
  'topRight' |
  'bottomLeft' |
  'bottomRight' |
  'leftTop' |
  'leftBottom' |
  'rightTop' |
  'rightBottom';

export interface PopconfirmProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** cancel 按钮 props	 */
  cancelButtonProps?: ButtonProps;
  /** 取消按钮文字 */
  cancelText?: ReactNode;
  /** 阻止点击 Popconfirm 子元素时弹出确认框 */
  disabled?: boolean;
  /** 自定义弹出气泡 Icon 图标 */
  icon?: ReactNode;
  /** ok 按钮 props */
  okButtonProps?: ButtonProps;
  /** 确认按钮文字 */
  okText?: ReactNode;
  /** 确认按钮类型 */
  okType?: ButtonType;
  /** 确认框的描述 */
  title?: ReactNode | titleType;
  /** 点击取消的回调 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 点击确认的回调 */
  onConfirm?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 气泡框位置 */
  placement?: TooltipPlacement;
  /** 鼠标移入后延时多少才显示 Tooltip，单位：秒 */
  mouseEnterDelay?: number;
  /** 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 */
  mouseLeaveDelay?: number;
  /** 气泡被遮挡时自动调整位置 */
  autoAdjustOverflow?: boolean;
  transitionName?: string;
  trigger?: string | string[];
  visible?: boolean;
  onVisibleChange?: (
    visible: boolean,
    e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => void;
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
  const { okButtonProps, cancelButtonProps, onCancel, onConfirm } = props
  const { className } = props
  const classes = classNames(className, {

  })
  const [visible, setVisible] = React.useState(props.visible);
  React.useEffect(() => {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  const settingVisible = (
    value: boolean,
    e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (!('visible' in props)) {
      setVisible(value);
    }

    if (props.onVisibleChange) {
      props.onVisibleChange(value, e);
    }
  };

  const onVisibleChange = (value: boolean) => {
    const { disabled } = props;
    if (disabled) {
      return;
    }
    settingVisible(value);
  };

  
  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    settingVisible(false, e);
    if (cancelButtonProps?.onClick) {
      cancelButtonProps?.onClick(e)
    } else if (onCancel) {
      onCancel(e)
    }
  }
  const handleOkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    settingVisible(false, e);
    if (okButtonProps?.onClick) {
      okButtonProps?.onClick(e)
    } else if (onConfirm) {
      onConfirm(e)
    }
  }
  const getOverlay = () => {
    const btnType = okButtonProps?.btnType || props.okType
    return (
      <div className={`${prefixCls}-inner-content`}>
        <div className={`${prefixCls}-message`}>
          <span className="anticon anticon-exclamation-circle">
            {props.icon}
          </span>

          <div className={`${prefixCls}-message-title`}>Are you sure to delete this task?</div>
        </div>
        <div className={`${prefixCls}-buttons`}>
          <Button
            size="sm"
            {...cancelButtonProps}
            onClick={handleCancelClick}
          >
            {props.cancelText}
          </Button>
          <Button
            size="sm"
            {...okButtonProps}
            btnType={btnType}
            onClick={handleOkClick}
          >
            {props.okText}
          </Button>
        </div>
      </div>
    )
  }
  return (
    <Tooltip
      visible={visible}
      prefixCls={prefixCls}
      placement={props.placement}
      trigger={props.trigger}
      overlay={getOverlay}
      overlayClassName={classes}
      onVisibleChange={onVisibleChange}
    >
      <span>{props.children}</span>
    </Tooltip>
  )
}

Popconfirm.defaultProps = {
  placement: 'top' as TooltipPlacement,
  transitionName: 'zoom-big',
  trigger: 'click',
  okType: 'primary',
  icon: <Icon icon="info-circle" />,
  disabled: false,
  cancelText: '取消',
  okText: '确定'
};
export default Popconfirm;