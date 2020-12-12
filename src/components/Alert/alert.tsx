import React, { useState } from 'react';
import classNames from 'classnames';

export enum AlertType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

interface BaseAlertProps {
  message: string;
  description?: string;
  type?: AlertType;
  className?: string;
  closable?: boolean;
  closeText?: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export type AlertProps = BaseAlertProps;

const Alert: React.FC<BaseAlertProps> = (props) => {
  const { message, description, type, className, closable, closeText } = props;
  const [closed, setClosed] = useState(false)

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClosed(true);
    props.onClose?.(e);
  }
  const renderCloseIcon = () => {
    return closable ? (
      <button
        className="alert-close-icon"
        type="button"
        onClick={handleClose}
      >
        {
          closeText ? (
            <span className="alert-close-text">{closeText}</span>
          ) :
            <span>close Icon</span>
        }
      </button>
    ) : null
  }
  const classes = classNames('alert', className, {
    'alert-with-description': description,
    [`alert-${type}`]: type
  })
  return closed ? null : (
    <div
      className={classes}
    >
      <span className="alert-message">{message}</span>
      <span className="alert-description">{description}</span>
      {
        renderCloseIcon()
      }
    </div>
  )
}

Alert.defaultProps = {
  type: AlertType.Info,
}

export default Alert;