import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'

import message from '../components/Message'
import { Button, ButtonProps } from '../components/Button/button'

export default {
  title: 'ship-ui/Message',
  component: Button,
  argTypes: {
  },
} as Meta;

const defauleButton: Story<ButtonProps> = (args) => (
  <>
    <Button onClick={() => {
      message.info('This is a normal message')
    }}>普通提示</Button>
    <div style={{margin: '20px 0'}}>
      <Button style={{marginRight: 20}} onClick={() => {
        message.success('This is a success message')
      }}>Success</Button>
      <Button style={{marginRight: 20}} onClick={() => {
        message.error('This is a error message')
      }}>Error</Button>
      <Button style={{marginRight: 20}} onClick={() => {
        message.warning('This is a warning message')
      }}>Warning</Button>
    </div>

    <Button style={{marginRight: 20}} onClick={() => {
      message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
    }}>修改延时</Button>
    <Button onClick={() => {
      message.success('This is a prompt message for success, and it will disappear in 10 seconds', () => {
        alert('close')
      });
    }}>关闭回调</Button>
  </>

)

export const info = defauleButton.bind({});
info.args = {};