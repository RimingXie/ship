import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Alert, AlertProps } from '../components/Alert/alert'
import { action } from '@storybook/addon-actions';


export default {
  title: 'ship-ui/Alert',
  component: Alert
} as Meta;

const defaultAlert: Story<AlertProps> = (args) => (
  <Alert {...args} onClose={action('onClose')} />
)

export const Info = defaultAlert.bind({})
Info.args = {
  message: 'Info text'
}