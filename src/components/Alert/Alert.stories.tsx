import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Alert, AlertProps } from './alert'
import { action } from '@storybook/addon-actions';


export default {
  title: 'ship-ui/Alert',
  component: Alert
} as Meta;

const defaultAlert: Story<AlertProps> = (args) => (
  <Alert {...args} onClose={action('onClose')} />
)

export const 即时属性 = defaultAlert.bind({})
即时属性.args = {
  message: 'Info text'
}

const CustomizedClose: Story<AlertProps> = (args) => (
  <Alert message="Info Text" type="info" closeText="Close Now" />
)

export const 自定义关闭 = CustomizedClose.bind({})

const MoreTypes: Story<AlertProps> = (args) => (
  <div className="alert-demo">
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </div>
)

export const 四种样式 = MoreTypes.bind({})

const Closable: Story<AlertProps> = (args) => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
  }
  return (
    <div className="alert-demo">
      <Alert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={onClose}

      />
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        onClose={onClose}
      />
    </div>
  )
}

export const 可关闭的警告提示 = Closable.bind({})

const Description: Story<AlertProps> = (args) => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
  }
  return (
    <div className="alert-demo">
      <Alert
        message="Success Text"
        description="Success Description Success Description Success Description"
        type="success"
      />
      <Alert
        message="Info Text"
        description="Info Description Info Description Info Description Info Description"
        type="info"
      />
      <Alert
        message="Warning Text"
        description="Warning Description Warning Description Warning Description Warning Description"
        type="warning"
      />
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description"
        type="error"
      />
    </div>
  )
}

export const 含有辅助性文字介绍 = Description.bind({})

const Icon: Story<AlertProps> = (args) => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
  }
  return (
    <div className="alert-demo">
      <Alert message="Success Tips" type="success" showIcon />
      <Alert message="Informational Notes" type="info" showIcon />
      <Alert message="Warning" type="warning" showIcon closable />
      <Alert message="Error" type="error" showIcon />
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <Alert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
      />
      <Alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        closable
      />
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </div>
  )
}

export const 图标 = Icon.bind({})
