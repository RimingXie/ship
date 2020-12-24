import React, { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import RcTooltip from 'rc-tooltip';

const prefixCls = 'ship-tooltip';
type renderReactNode = () => ReactNode;
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
export interface TooltipProps {
  /** 该值将合并到 placement 的配置中，设置参考 `rc-tooltip` */
  align?: any;
  /** 气泡被遮挡时自动调整位置 */
  autoAdjustOverflow?: boolean;
  /** 背景颜色 */
  color?: string;
  /** 默认是否显隐 */
  defaultVisible?: boolean;
  /** 关闭后是否销毁 Tooltip，当 `keepParent` 为 `false` 时销毁父容器 */
  destroyTooltipOnHide?: boolean;
  /** 浮层渲染父节点，默认渲染到 body 上 */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  /** 鼠标移入后延时多少才显示 Tooltip，单位：秒 */
  mouseEnterDelay?: number;
  /** 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 */
  mouseLeaveDelay?: number;
  /** 卡片类名 */
  overlayClassName?: string;
  /** 卡片样式 */
  overlayStyle?: CSSProperties;
  /** 气泡框位置 */
  placement?: TooltipPlacement;
  /** 触发行为，可选 `hover` | `focus` | `click` | `contextMenu`，可使用数组设置多个触发行为 */
  trigger?: string | string[];
  /** 用于手动控制浮层显隐 */
  visible?: boolean;
  /** 显示隐藏的回调 */
  onVisibleChange?: (visible: boolean) => void;
  /** 提示文字 */
  title?: ReactNode | renderReactNode;
  /** 提示内容 */
  overlay?: ReactNode | renderReactNode;
  transitionName?: string;
  className?:string;
}

export interface TooltipPropsWithOverlay extends TooltipProps {
  overlay?: ReactNode | renderReactNode
}

/**
 * 简单的文字提示气泡框。
 * 
 * ```js
 * import { Tooltip } from 'ship-ui'
 * ```
 */
export const Tooltip: React.FC<TooltipPropsWithOverlay> = (props) => {
  const { className, children, overlay, title, color, overlayStyle } = props
  const classes = classNames(className, {

  });
  console.log(props.color)
  const getOverlayStyle = {
    ...overlayStyle,
    backgroundColor: color
  }
  return (
    <RcTooltip
      {...props}
      overlayInnerStyle={getOverlayStyle}
      overlayClassName={classes}
      overlay={() => overlay || title || ''}
      prefixCls={prefixCls}
      arrowContent={<span className={`${prefixCls}-arrow-content`} style={{backgroundColor: color}} />}
    >
      <span>{children}</span>
    </RcTooltip>
  )
}

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  placement: 'top' as TooltipPlacement,
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  autoAdjustOverflow: true,
};

export default Tooltip;