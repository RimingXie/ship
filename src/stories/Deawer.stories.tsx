import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button/button';
import { Drawer, DrawerProps } from '../components/Drawer/drawer'

export default {
  title: 'ship-ui/Drawer',
  component: Drawer,
} as Meta;

const defaultDrawer: Story<DrawerProps> = (args) => (
  <>
    <Button btnType="primary" onClick={() => { args.visible = !args.visible }}>
      Open
      </Button>
    <Drawer
      {...args}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </>
)
export const Default = defaultDrawer.bind({});
Default.args = {
  title:"Basic Drawer",
  visible: false,
  footer:"this is footer"
};