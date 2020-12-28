import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox from './index'
import Button from '../Button';
import { CheckboxProps } from './checkbox';
import Divider from '../Divider';

const CheckboxGroup = Checkbox.Group;

export default {
  title: "ship-ui/Checkbox",
  component: Checkbox,
} as Meta;


const Basic: Story<CheckboxProps> = (args) => {
  const onChange = (e: Event) => {
    console.log(e)
  }
  return (
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
  )
}

export const 基本使用 = Basic.bind({})

const Disabled: Story<CheckboxProps> = (args) => {
  const onChange = (e: Event) => {
    console.log(e)
  }
  return (
    <>
      <Checkbox defaultChecked={false} disabled >Disabled</Checkbox>
      <br />
      <Checkbox defaultChecked disabled >Disabled</Checkbox>
    </>
  )
}

export const 不可用 = Disabled.bind({})


const ControlledCheckbox: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);
  const onChange = (e: Event) => {
    setChecked(e.target?.checked)
  }
  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'
    }`;
  return (
    <>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        >
          {label}
        </Checkbox>
      </p>
      <p>
        <Button btnType="primary" size="sm" onClick={toggleChecked}>
          {checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button
          style={{ margin: '0 10px' }}
          btnType="primary"
          size="sm"
          onClick={toggleDisable}
        >
          {disabled ? 'Disable' : 'Enable'}
        </Button>
      </p>
    </>
  );
}

export const 受控的Checkbo = ControlledCheckbox.bind({})



const CheckAll: Story<CheckboxProps> = (args) => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: Event) => {
    console.log(e)
    setCheckedList(e.target?.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target?.checked);
  };
  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  )
}

export const 全选 = CheckAll.bind({})