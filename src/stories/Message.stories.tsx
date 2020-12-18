import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0'

import {createMessage} from '../components/Message/demo'
import { Button, ButtonProps } from '../components/Button/button'

export default {
  title: 'ship-ui/Message',
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
    createMessage()('This is a info message')
  } 
};

// export const success = defauleButton.bind({});
// success.args = {
//   children: 'Display success message',
//   btnType: "primary",
//   onClick: () => {
//     message.success('This is a success message')
//   } 
// };

// export const error = defauleButton.bind({});
// error.args = {
//   children: 'Display error message',
//   btnType: "primary",
//   onClick: () => {
//     message.error('This is a error message')
//   } 
// };

// export const warning = defauleButton.bind({});
// warning.args = {
//   children: 'Display warning message',
//   btnType: "primary",
//   onClick: () => {
//     message.warning('This is a warning message')
//   } 
// };