import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Button } from '../Button/button';
import { Drawer, DrawerProps, placementType } from './drawer'
import { DividerProps } from '../Divider';

export default {
  title: 'ship-ui/Drawer',
  component: Drawer,
} as Meta;

const Basic: Story<DividerProps> = (args) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button btnType="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        {...args}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export const 基础抽屉 = Basic.bind({});
基础抽屉.args = {
  title: 'Basic Drawer',
  placement: "right",
  closable: false,
}

const CustomPlacement: Story<DrawerProps> = (args) => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('right');
  const showDrawer = (plac: placementType) => {
    setPlacement(plac)
    setTimeout(() => {
      setVisible(true);
    }, 100);
    
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div>
        <Button btnType="primary" onClick={() => showDrawer('top')}>
          top
      </Button>
        <Button btnType="primary" onClick={() => showDrawer('right')}>
          right
      </Button>
        <Button btnType="primary" onClick={() => showDrawer('bottom')}>
          bottom
      </Button>
        <Button btnType="primary" onClick={() => showDrawer('left')}>
          left
      </Button>
      </div>
      <Drawer
        {...args}
        placement={placement as placementType}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export const 自定义位置 = CustomPlacement.bind({});
自定义位置.args = {
  title: 'Basic Drawer',
  placement: "right",
  closable: false,
}


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
  title: "Basic Drawer",
  visible: false,
  footer: "this is footer"
};