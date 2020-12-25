import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions';
import Button from '../Button'
import Modal from '.'
import { ModalProps } from './modal';
import { title } from 'process';

export default {
  title: 'ship-ui/Modal',
  component: Modal
} as Meta;

const Basic: Story<ModalProps> = (args) => {
  const [visible, setVisible] = React.useState(args.visible)

  const setStatus = () => {
    setVisible(!visible)
  }
  const closeModal = () => {
    setVisible(false)
  }
  const handleOk = () => {
    console.log('onOk')
    closeModal()
  }
  const handleCancel = () => {
    console.log('onCancel')
    closeModal()
  }
  return (
    <div>
      <Button btnType="primary" onClick={setStatus}>
        Open Modal
      </Button>
      <Modal {...args} visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
export const 基本用法 = Basic.bind({})
基本用法.args = {
  visible: false,
  title: 'Basic Modal'
}

const CustomizedFooter: Story<ModalProps> = (args) => {
  const [visible, setVisible] = React.useState(args.visible)

  const setStatus = () => {
    setVisible(!visible)
  }
  const closeModal = () => {
    setVisible(false)
  }
  const handleOk = () => {
    console.log('onOk')
    closeModal()
  }
  const handleCancel = () => {
    console.log('onCancel')
    closeModal()
  }
  return (
    <div>
      <Button btnType="primary" onClick={setStatus}>
        Open Modal
      </Button>
      <Modal
        {...args}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
            </Button>,
          <Button key="submit" btnType="primary" onClick={handleOk}>
            Submit
            </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
export const 自定义页脚 = CustomizedFooter.bind({})
自定义页脚.args = {
  visible: false,
  title: 'Title'
}

const CustomizedWidth: Story<ModalProps> = (args) => {
  const [visible, setVisible] = React.useState(args.visible)
  return (
    <div>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  )
}
export const 自定义模态的宽度 = CustomizedWidth.bind({})
自定义模态的宽度.args = {
  visible: false,
  title: 'Modal 1000px width'
}

const CustomizedPosition: Story<ModalProps> = (args) => {
  const [visible1, setModal1Visible] = React.useState(args.visible);
  const [visible2, setModal2Visible] = React.useState(args.visible)
  return (
    <div>
      <Button btnType="primary" onClick={() => setModal1Visible(true)}>
          Display a modal dialog at 20px to Top
        </Button>
        <Modal
          title="20px to Top"
          style={{ top: 20 }}
          visible={visible1}
          onOk={() => setModal1Visible(false)}
          onCancel={() => setModal1Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <br />
        <br />
        <Button btnType="primary" onClick={() => setModal2Visible(true)}>
          Vertically centered modal dialog
        </Button>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={visible2}
          onOk={() => setModal2Visible(false)}
          onCancel={() => setModal2Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
    </div>
  )
}
export const 自定义位置 = CustomizedPosition.bind({})
自定义位置.args = {
  visible: false,
}

const CustomizedButtonProps: Story<ModalProps> = (args) => {
  const [visible, setModalVisible] = React.useState(args.visible);
  return (
    <div>
      <Button btnType="primary" onClick={() => setModalVisible(true)}>
          Open Modal with customized button props
        </Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    </div>
  )
}
export const 自定义页脚按钮属性 = CustomizedButtonProps.bind({})
自定义页脚按钮属性.args = {
  visible: false,
}

const confirm: Story<ModalProps> = (args) => (
  <div>
    <Button onClick={() => {
      Modal.confirm({
        title: 'Do you Want to delete these items?',
        content: 'Some descriptions',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }}>Open Modal</Button>
  </div>
)
export const 确认对话框 = confirm.bind({})
确认对话框.args = {}

const MessageTips: Story<ModalProps> = (args) => (
  <>
    <div style={{ margin: '20px 0' }}>
      <Button style={{ marginRight: 20 }} onClick={() => {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() { },
        });
      }}>info</Button>
      <Button style={{ marginRight: 20 }} onClick={() => {
        Modal.success({
          content: 'some messages...some messages...',
        });
      }}>success</Button>
      <Button style={{ marginRight: 20 }} onClick={() => {
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
      }}>error</Button>
      <Button style={{ marginRight: 20 }} onClick={() => {
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
      }}>warning</Button>
    </div>


  </>

)

export const 信息提示 = MessageTips.bind({});
信息提示.args = {};