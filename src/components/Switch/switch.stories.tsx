import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import { Switch, SwitchProps } from "./index"
import Button from '../Button';
import Icon from '../Icon';

export default {
  title: 'ship-ui/Switch',
  component: Switch
} as Meta;

const Basic: Story<SwitchProps> = (args) => {

  return (
    <Switch {...args} />
  )
}

export const 基本使用 = Basic.bind({})

const Disabled: Story<SwitchProps> = (args) => {

  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button btnType="primary" onClick={toggle} style={{ marginTop: 20 }}>
        Toggle disabled
      </Button>
    </>
  );
}

export const 不可用 = Disabled.bind({})

const TextAndIcon: Story<SwitchProps> = (args) => {

  return (
    <>
      <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <br />
      <Switch
        checkedChildren={<Icon icon="check" />}
        unCheckedChildren={<Icon icon="times" />}
        defaultChecked
      />
    </>
  );
}

export const 文字和图标 = TextAndIcon.bind({})

const TowSize: Story<SwitchProps> = (args) => {

  return (
    <>
      <Switch defaultChecked />
      <br />
      <Switch size="small" defaultChecked />
    </>
  );
}

export const 两种大小 = TowSize.bind({})

const Loading: Story<SwitchProps> = (args) => {

  return (
    <>
      <Switch loading defaultChecked />
      <br />
      <Switch size="small" loading />
    </>
  );
}

export const 加载中 = Loading.bind({})