import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Icon, IconProps } from '../components/Icon/icon'


export default {
  title: 'ship-ui/Icon',
  component: Icon
} as Meta;

const defaultAlert: Story<IconProps> = (args) => <Icon {...args} />

export const Info = defaultAlert.bind({})
Info.args = {
  icon: 'coffee'
}