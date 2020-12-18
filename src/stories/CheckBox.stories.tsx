import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'

import {Checkbox, CheckBoxProps} from '../components/Checkbox/checkbox'

export default {
  title: "ship-ui/Checkbox",
  component: Checkbox,
  argTypes:{
    children:{
      control: 'text',
      description: 'CheckBox的文本或内容',
    }
  }
} as Meta;

interface testProps extends CheckBoxProps{
  children: React.HTMLAttributes<HTMLElement>
}

const defaultCheckBox: Story<testProps> = (args) => {
  return (
    <Checkbox {... args}>{args.children || 'Checkbox'}</Checkbox>
  )
}

export const CheckBox = defaultCheckBox.bind({})

CheckBox.args = {

};