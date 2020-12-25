import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '../Button/button'

import notification, { ArgsProps } from './index'
import Icon from '../Icon';

export default {
  title: 'ship-ui/Notification',
  component: Button,
  argTypes: {
  },
} as Meta;

const Basic: Story<ArgsProps> = (args) => (
  <div>
    <Button
      style={{ marginBottom: 20 }}
      btnType="primary"
      onClick={() => {
        notification.open({
          message: 'Notification Title',
          description: 'This is the content of the notification',
        })
      }}>基本用法</Button>
  </div>
)
export const 基本用法 = Basic.bind({})
基本用法.args = {}

const DurationAfter: Story<ArgsProps> = (args) => (
  <div>
    <Button
      style={{ marginBottom: 20 }}
      btnType="primary"
      onClick={() => {
        notification.open({
          message: 'Notification Title',
          description: 'This is the content of the notification',
          duration: 0,
        })
      }}>自动关闭的延时</Button>
  </div>
)
export const 自动关闭的延时 = DurationAfter.bind({})
自动关闭的延时.args = {}

const withIcon: Story<ArgsProps> = (args) => (
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
)
export const 带有图标的通知提醒框 = withIcon.bind({})
带有图标的通知提醒框.args = {}

const CustomizedIcon: Story<ArgsProps> = (args) => (
  <div>
    <Button
      style={{ marginBottom: 20 }}
      btnType="primary"
      onClick={() => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          icon: <Icon icon="smile-beam" style={{ color: 'red' }} />,
        });
      }}>自定义图标</Button>
  </div>
)
export const 自定义图标 = CustomizedIcon.bind({})
自定义图标.args = {}

const CustomizedStyle: Story<ArgsProps> = (args) => (
  <div>
    <Button
      style={{ marginBottom: 20 }}
      btnType="primary"
      onClick={() => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          className: 'custom-class',
          duration: 0,
          style: {
            width: 600,
          },
        });
      }}>自定义样式</Button>
  </div>
)
export const 自定义样式 = CustomizedStyle.bind({})
自定义样式.args = {}

const Position: Story<ButtonProps> = (args) => (
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
)


export const 位置 = Position.bind({});
位置.args = {};