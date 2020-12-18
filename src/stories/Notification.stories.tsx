import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0'

import {xNotification} from '../components/Notification/notification'
import { Button, ButtonProps } from '../components/Button/button'

export default {
  title: 'ship-ui/Notification',
  component: Button,
  argTypes: {
  },
} as Meta;

const defauleButton: Story<ButtonProps> = (args) => <Button {...args}>{args.children || 'buttom'}</Button>

export const info = defauleButton.bind({});
info.args = {
  children: 'Display info message',
  btnType: "primary",
  onClick: () => {
    xNotification.pop({type: 'success', description: '1234', message: '345'})
  } 
};