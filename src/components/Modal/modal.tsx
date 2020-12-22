import React, { CSSProperties, MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';
import Dialog, { DialogProps } from 'rc-dialog'
// import addEventListener from 'rc-util/lib/Dom/addEventListener';
import Button, { ButtonProps, ButtonType } from '../Button/button';
import Icon from '../Icon';
const prefixCls = 'ship-modal'
let mousePosition: { x: number; y: number } | null;

const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};

// 只有点击事件支持从鼠标位置动画展开
// if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
//   addEventListener(document.documentElement, 'click', getClickPosition);
// }

type getContainerFunc = () => HTMLElement;
export interface ModalProps {
  /** Modal 完全关闭后的回调 */
  afterClose?: () => void;
  /** Modal body 样式 */
  bodyStyle?: CSSProperties;
  /** cancel 按钮 props */
  cancelButtonProps?: ButtonProps;
  /** 取消按钮文字 */
  cancelText?: ReactNode;
  /** 垂直居中展示 Modal */
  centered?: boolean;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 自定义关闭图标 */
  closeIcon?: ReactNode;
  /** 关闭时销毁 Modal 里的子元素 */
  destroyOnClose?: boolean;
  /** 对话框关闭后是否需要聚焦触发元素 */
  focusTriggerAfterClose?: boolean;
  /** 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` */
  footer?: ReactNode;
  /** 强制渲染 Modal */
  forceRender?: boolean;
  /** 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom */
  getContainer?: string | HTMLElement | getContainerFunc | false;
  /** 是否支持键盘 esc 关闭 */
  keyboard?: boolean;
  /** 是否展示遮罩 */
  mask?: boolean;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  /** 遮罩样式 */
  maskStyle?: CSSProperties;
  /** 自定义渲染对话框 */
  modalRender?: (node: ReactNode) => ReactNode;
  /** ok 按钮 props */
  okButtonProps?: ButtonProps;
  /** 确认按钮文字 */
  okText?: ReactNode;
  /** 确认按钮类型 */
  okType?: ButtonType;
  /** 可用于设置浮层的样式，调整浮层位置等 */
  style?: CSSProperties;
  /** 标题 */
  title?: ReactNode;
  /** 对话框是否可见 */
  visible?: boolean;
  /** 宽度 */
  width?: number;
  /** 对话框外层容器的类名 */
  wrapClassName?: string;
  /** 设置 Modal 的 z-index */
  zIndex?: number;
  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: (e: MouseEvent<HTMLElement>) => void;
  /** 点击确定回调 */
  onOk?: (e: MouseEvent<HTMLElement>) => void;
  maskTransitionName?: string;
  transitionName?: string;
}

/**
 * 模态对话框。
 * 
 * ```js
 * import { Modal } from 'ship-ui'
 * ```
 */
export const Modal: React.FC<ModalProps> = (props) => {
  const { transitionName, maskTransitionName } = props;
  const contentPrefixCls = `${prefixCls}-confirm`;
  
  return (
    <Dialog
      transitionName={transitionName}
      maskTransitionName={maskTransitionName}
      prefixCls={prefixCls}
      width={props.width}
      title={props.title}
      onClose={() => { }}
      visible={props.visible}
      zIndex={props.zIndex}
      mousePosition={mousePosition!}
      >
      <p>first dialog</p>
    </Dialog>
  )
}

Modal.defaultProps = {
  cancelText: '取消',
  closable: true,
  closeIcon: <Icon icon="times" />,
  focusTriggerAfterClose: true,
  getContainer: () => document.body,
  keyboard: true,
  mask: true,
  maskClosable: true,
  okText: '确定',
  okType: 'primary',
  width: 520,
  visible: false,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
}

export default Modal;