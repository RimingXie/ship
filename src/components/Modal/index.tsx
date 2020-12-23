import { FC } from 'react'
import Modal, { ModalProps } from './modal'
import {
  confirm,
  withInfo,
  withSuccess,
  withError,
  withConfirm,
  ModalFuncProps,
  withWarn
} from './confirm'

type ConfigUpdate = ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps);

export type ModalFunc = (props: ModalFuncProps) => {
  destroy: () => void;
  update: (configUpdate: ConfigUpdate) => void;
};

export type IModalComponent = FC<ModalProps> & {
  info: (props: ModalFuncProps) => void;
  success: (props: ModalFuncProps) => void;
  error: (props: ModalFuncProps) => void;
  warning: (props: ModalFuncProps) => void;
  warn: (props: ModalFuncProps) => void;
  confirm: (props: ModalFuncProps) => void;
}

const TransModal = Modal as IModalComponent;

TransModal.info = (props: ModalFuncProps) => {
  return confirm(withInfo(props));
};

TransModal.success = (props: ModalFuncProps) => {
  return confirm(withSuccess(props));
};

TransModal.error = (props: ModalFuncProps) => {
  return confirm(withError(props));
};

TransModal.info = (props: ModalFuncProps) => {
  return confirm(withInfo(props));
};

function modalWarn(props: ModalFuncProps) {
  return confirm(withWarn(props));
}

TransModal.warning = modalWarn;

TransModal.warn = modalWarn;

TransModal.confirm = (props: ModalFuncProps) => {
  return confirm(withConfirm(props));
};

export default TransModal