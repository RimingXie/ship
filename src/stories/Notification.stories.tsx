import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '../components/Button/button'

import notification from '../components/Notification'

export default {
  title: 'ship-ui/Notification',
  component: Button,
  argTypes: {
  },
} as Meta;

const defauleButton: Story<ButtonProps> = (args) => (
  <>
    <Button
      style={{ marginBottom: 20 }}
      btnType="primary"
      onClick={() => {
        notification.open({
          message: 'Notification Title',
          description: 'This is the content of the notification',
        })
      }}>基本用法</Button><br />
    <Button
      style={{ marginBottom: 20 }}
      btnType="primary"
      onClick={() => {
        notification.open({
          message: 'Notification Title',
          description: 'This is the content of the notification',
          duration: 0,
        })
      }}>自动关闭的延时</Button><br />
    <div style={{ marginBottom: 20 }}>
      <Button
        style={{ marginRight: 20 }}
        btnType="default"
        onClick={() => {
          notification.success({
            message: 'Notification Title',
            description: 'This is the content of the notification',
          })
        }}>success</Button>
      <Button
        style={{ marginRight: 20 }}
        btnType="default"
        onClick={() => {
          notification.info({
            message: 'Notification Title',
            description: 'This is the content of the notification',
          })
        }}>info</Button>
      <Button
        style={{ marginRight: 20 }}
        btnType="default"
        onClick={() => {
          notification.warning({
            message: 'Notification Title',
            description: 'This is the content of the notification',
          })
        }}>warning</Button>
      <Button
        btnType="default"
        onClick={() => {
          notification.error({
            message: 'Notification Title',
            description: 'This is the content of the notification',
          })
        }}>error</Button>
    </div>
    <div style={{ marginBottom: 20 }}>
      <Button
        style={{ marginRight: 20 }}
        btnType="default"
        onClick={() => {
          notification.info({
            message: 'Notification Title',
            description: 'This is the content of the notification',
            placement: 'topLeft'
          })
        }}>topLeft</Button>
      <Button
        style={{ marginRight: 20 }}
        btnType="default"
        onClick={() => {
          notification.info({
            message: 'Notification Title',
            description: 'This is the content of the notification',
            placement: 'topRight'
          })
        }}>topRight</Button>
      <Button
        style={{ marginRight: 20 }}
        btnType="default"
        onClick={() => {
          notification.info({
            message: 'Notification Title',
            description: 'This is the content of the notification',
            placement: 'bottomLeft'
          })
        }}>bottomLeft</Button>
      <Button
        btnType="default"
        onClick={() => {
          notification.info({
            message: 'Notification Title',
            description: 'This is the content of the notification',
            placement: 'bottomRight'
          })
        }}>bottomRight</Button>
    </div>
  </>
)


export const info = defauleButton.bind({});
info.args = {};