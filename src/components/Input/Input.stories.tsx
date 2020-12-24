import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input, InputProps } from './input'

export default {
  title: 'ship-ui/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
      description: '默认显示的提醒',
    }
  }
} as Meta;

const defaultInput: Story<InputProps> = (args) => {
  return <Input {...args} />
}

export const Info = defaultInput.bind({})
Info.args = {}