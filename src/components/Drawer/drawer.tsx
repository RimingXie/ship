import React, { CSSProperties, ReactNode } from 'react';
import RCDrawer from 'rc-drawer';
import Icon from '../Icon/icon'
import { IconName } from '@fortawesome/fontawesome-svg-core';

const prefixCls = 'ship-drawer'
const defaultWidth = 256;
const defaultHeight = 256;
// const defaultCloseIcon = <Icon icon="times" />

type getContainerFunc = () => HTMLElement;
type placementType = 'top' | 'right' | 'bottom' | 'left';
export interface DrawerProps {
  /** Drawer 是否可见 */
  visible?: boolean;
  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onClose?: () => void;
  /** 切换抽屉时动画结束后的回调 */
  afterVisibleChange?: (visible: boolean) => void;
  /** 可用于设置 Drawer 内容部分的样式 */
  bodyStyle?: CSSProperties;
  /** 对话框外层容器的类名 */
  className?: string;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 自定义关闭图标 */
  closeIcon?: ReactNode;
  /** 关闭时销毁 Drawer 里的子元素 */
  destroyOnClose?: boolean;
  /** 用于设置 Drawer 弹出层的样式 */
  drawerStyle?: CSSProperties;
  /** 抽屉的页脚 */
  footer?: ReactNode;
  /** 抽屉页脚部件的样式 */
  footerStyle?: CSSProperties;
  /** 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom */
  getContainer?: string | HTMLElement | getContainerFunc | false;
  /** 用于设置 Drawer 头部的样式 */
  headerStyle?: CSSProperties;
  /** 高度, 在 `placement` 为 `top` 或 `bottom` 时使用 */
  height?: number | string;
  /** 是否支持键盘 esc 关闭 */
  keyboard?: boolean;
  /** 是否展示遮罩 */
  mask?: boolean;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  /** 遮罩样式 */
  maskStyle?: CSSProperties;
  /** 抽屉的方向 */
  placement?: placementType;
  /** 可用于设置 Drawer 最外层容器的样式，和 `drawerStyle` 的区别是作用节点包括 `mask` */
  style?: CSSProperties;
  /** 标题 */
  title?: ReactNode;
  /** 宽度 */
  width?: number | string;
  /** 设置 Drawer 的 z-index */
  zIndex?: number;
  /** visible变化时回调 */
  onChange?: (visible: boolean) => void;
}

const renderCloseIcon = (props: DrawerProps): ReactNode => {
  const { closeIcon, closable, onClose } = props;
  let close: ReactNode = <Icon icon="times" />;
  if (closeIcon) {
    if (typeof closeIcon === 'string') {
      close = <Icon icon={closeIcon as IconName} />;
    } else {
      close = closeIcon;
    }
  }
  return (
    closable &&
    <button
      onClick={onClose}
      aria-label="Close"
      type="button"
      className={`${prefixCls}-close`}
    >
      {close}
    </button>
  )
}

const renderHeader = (props: DrawerProps): ReactNode => {
  const { title, closable, headerStyle } = props;
  if (!title && !closable) {
    return null;
  }

  return (
    <div className={title ? `${prefixCls}-header` : `${prefixCls}-header-no-title`} style={headerStyle}>
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      { renderCloseIcon(props)}
    </div>
  )
}

const renderFooter = (props: DrawerProps): ReactNode => {
  const { footer, footerStyle } = props;
  if (!footer) {
    return null;
  }
  return (
    <div className={`${prefixCls}-footer`} style={footerStyle}>
      {props.footer}
    </div>
  )
}

/**
 * 屏幕边缘滑出的浮层面板。
 * 
 * ```js
 * import { Drawer } from 'ship-ui'
 * ```
 */
export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    children,
    placement,
    width,
    height
  } = props;
  const drawerHeight = (placement === 'top' || placement === 'bottom') ? (height || defaultHeight) : undefined;
  const drawerWidth = (placement === 'left' || placement === 'right') ? (width || defaultWidth) : undefined

  return (
    <RCDrawer
      open={props.visible}
      prefixCls={prefixCls}
      style={props.style}
      width={drawerWidth}
      onClose={props.onClose}
      className={props.className}
      showMask={props.mask}
      maskClosable={props.maskClosable}
      maskStyle={props.maskStyle}
      keyboard={props.keyboard}
      afterVisibleChange={props.afterVisibleChange}
      getContainer={props.getContainer}
      placement={placement}
      handler={false}
      height={drawerHeight}
      level={null}
    >
      <div className={`${prefixCls}-wrapper-body`}>
        {renderHeader(props)}
        <div className={`${prefixCls}-body`}>
          {children}
        </div>
        {renderFooter(props)}
      </div>
    </RCDrawer>
  )
}

Drawer.defaultProps = {
  closable: true,
  destroyOnClose: false,
  getContainer: () => document.body,
  maskClosable: true,
  placement: 'right',
  zIndex: 1000
}

export default Drawer;