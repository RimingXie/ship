import React from 'react';
import classNames from 'classnames';

export interface ModalProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * 模态对话框。
 * ```
 * import { Modal } from 'ship-ui'
 * ```
 */
export const Modal: React.FC<ModalProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('modal', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Modal;