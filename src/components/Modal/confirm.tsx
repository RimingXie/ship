import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import React, { CSSProperties, ReactNode, ReactText, useState } from 'react';
import ReactDOM from 'react-dom';
import Button, { ButtonProps, ButtonType } from '../Button/button';
import Icon from '../Icon';
import Modal from './modal';

let defaultRootPrefixCls = 'ship';
const prefixCls = 'ship-modal-confirm'

type getContainerFunc = () => HTMLElement;
export interface ModalFuncProps {
  /** 指定自动获得焦点的按钮 */
  autoFocusButton?: null | 'ok' | 'cancel';
  /** Modal body 样式 */
  bodyStyle?: CSSProperties;
  /** cancel 按钮 props */
  cancelButtonProps?: ButtonProps;
  /** 设置 Modal.confirm 取消按钮文字 */
  cancelText?: ReactNode;
  /** 垂直居中展示 Modal */
  centered?: boolean;
  /** 容器类名 */
  className?: string;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 自定义关闭图标 */
  closeIcon?: ReactNode;
  /** 内容 */
  content?: ReactNode;
  /** 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom */
  getContainer?: string | HTMLElement | getContainerFunc | false;
  /** 自定义图标 */
  icon?: ReactNode;
  /** 是否支持键盘 esc 关闭 */
  keyboard?: boolean;
  /** 是否展示遮罩 */
  mask?: boolean;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  /** 遮罩样式 */
  maskStyle?: CSSProperties;
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
  /** 宽度 */
  width?: number;
  /**设置 Modal 的 `z-index` */
  zIndex?: number;
  /** 点击取消按钮回调 */
  onCancel?: (...args: any[]) => any;
  /** 点击确定按钮回调 */
  onOk?: (...args: any[]) => any;
};

export interface Iwith {
  type?: 'info' | 'success' | 'error' | 'warning' | 'warn' | 'confirm';
  okCancel?: boolean;
  close?: () => void;
}

const OpenModal: React.FC<ModalFuncProps & Iwith> = (props) => {
  const { type, okCancel, icon, closable, width, onOk, title, content, cancelText, okText, className, okButtonProps,cancelButtonProps, ...orders } = props;
  const [visible, setVisible] = useState(true)
  const classes = classNames(prefixCls, `${prefixCls}-body-wrapper`);
  const wrapClassName = classNames(`${prefixCls}-${type}`, className)
  const handelOnok = () => {
    setVisible(false)
  }
  const handelCancel = () => {
    setVisible(false)
    setTimeout(() => {
      if(props.close) props.close()
    }, 300);
  }
  return (
    <Modal
      footer={null}
      visible={visible}
      closable={closable || false}
      width={width || 416}
      title=''
      wrapClassName={wrapClassName}
      afterClose={onOk}
      {...orders}
    >
      <div className={classes}>
        <div className={`${prefixCls}-body`}>
          <span className="anticon anticon-info-circle">
            {icon}
          </span>
          <span className={`${prefixCls}-title`}>{title}</span>
          <div className={`${prefixCls}-content`}>
            {content}
          </div>
        </div>
        <div className={`${prefixCls}-btns`}>
          {
            type === 'confirm' &&
            <Button
              size={cancelButtonProps?.size || "sm"}
              btnType={cancelButtonProps?.btnType || "default"}
              onClick={handelCancel}
              {...cancelButtonProps}
            >
              {cancelText || '取消'}
            </Button>
          }
          <Button
            size={okButtonProps?.size || "sm"}
            btnType={okButtonProps?.btnType || "primary"}
            onClick={handelOnok}
            {...okButtonProps}
          >
            {okText || '知道了'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export function confirm(config: ModalFuncProps & Iwith) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  const onOk = () => {
    close()
    if (config.onOk) {
      config.onOk()
    }
  }

  ReactDOM.render(
    <OpenModal
      {...config}
      onOk={onOk}
      close={close}
    ></OpenModal>
    , div)
}

export function withInfo(props: ModalFuncProps): ModalFuncProps & Iwith {
  return {
    type: 'info',
    icon: <Icon icon="exclamation-circle" />,
    okCancel: false,
    ...props,
  }
}

export function withSuccess(props: ModalFuncProps): ModalFuncProps & Iwith {
  return {
    type: 'success',
    icon: <Icon icon="check-circle" />,
    okCancel: false,
    ...props,
  }
}

export function withWarn(props: ModalFuncProps): ModalFuncProps & Iwith {
  return {
    type: 'warning',
    icon: <Icon icon="exclamation-triangle" />,
    okCancel: false,
    ...props,
  }
}

export function withError(props: ModalFuncProps): ModalFuncProps & Iwith {
  return {
    type: 'error',
    icon: <Icon icon="times-circle" />,
    okCancel: false,
    ...props,
  }
}

export function withConfirm(props: ModalFuncProps): ModalFuncProps & Iwith {
  return {
    type: 'confirm',
    icon: <Icon icon="question-circle" />,
    okCancel: true,
    okText: "确认",
    ...props,
  }
}
