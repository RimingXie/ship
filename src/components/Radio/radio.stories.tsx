import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import Radio from './index';
import Button from '../Button';
import { RadioProps } from './radio';
import Input from '../Input';
import { RadioGroupProps } from './group';

export default {
  title: 'ship-ui/Radio',
  component: Radio
} as Meta;

const Basic: Story<RadioProps> = (args) => {
  return (
    <>
      <Radio>Radio</Radio>
    </>
  )
}

export const 基本用法 = Basic.bind({})

const Disabled: Story<RadioProps> = (args) => {
  const [disabled, setDisabled] = React.useState(true);
  const toggleDisabled = () => {
    setDisabled(!disabled)
  };
  return (
    <>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button btnType="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
        Toggle disabled
      </Button>
    </>
  )
}

export const 不可用 = Disabled.bind({})

const RadioGroup: Story<RadioGroupProps> = (args) => {
  const [value, setValue] = React.useState(1);

  const onChange = (e: Event & { target: any }) => {
    console.log('radio checked', e.target?.value);
    setValue(e.target?.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  )
}

export const 单选组合 = RadioGroup.bind({})

const VerticalGroup: Story<RadioGroupProps> = (args) => {
  const [value, setValue] = React.useState(1);

  const onChange = (e: Event & { target: any }) => {
    console.log('radio checked', e.target?.value);
    setValue(e.target?.value);
  };
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio style={radioStyle} value={1}>
        Option A
        </Radio>
      <Radio style={radioStyle} value={2}>
        Option B
        </Radio>
      <Radio style={radioStyle} value={3}>
        Option C
        </Radio>
      <Radio style={radioStyle} value={4}>
        More...
          {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
      </Radio>
    </Radio.Group>
  )
}

export const Group垂直 = VerticalGroup.bind({})

const GroupOptional: Story<RadioGroupProps> = (args) => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  const [value1, setValue1] = React.useState('Apple')
  const [value2, setValue2] = React.useState('Apple')
  const [value3, setValue3] = React.useState('Apple')
  const [value4, setValue4] = React.useState('Apple')
  const onChange1 = (e: Event & { target: any }) => {
    console.log('radio1 checked', e.target.value);
    setValue1(e.target.value)
  };

  const onChange2 = (e: Event & { target: any }) => {
    console.log('radio2 checked', e.target.value);
    setValue2(e.target.value)
  };

  const onChange3 = (e: Event & { target: any }) => {
    console.log('radio3 checked', e.target.value);
    setValue3(e.target.value)
  };

  const onChange4 = (e: Event & { target: any }) => {
    console.log('radio4 checked', e.target.value);
    setValue4(e.target.value)
  };

  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
      <br />
      <br />
      <Radio.Group
        options={options}
        onChange={onChange3}
        value={value3}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  )
}

export const Group配置方式 = GroupOptional.bind({})


const RadioStyle: Story<RadioGroupProps> = (args) => {
  const onChange = (e: Event & { target: any }) => {
    console.log(`radio checked:${e.target.value}`);
  }

  return (
    <>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <br/>
      <Radio.Group onChange={onChange} defaultValue="a" style={{ marginTop: 16 }}>
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b" disabled>
          Shanghai
      </Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <br/>
      <Radio.Group disabled onChange={onChange} defaultValue="a" style={{ marginTop: 16 }}>
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </>
  )
}

export const 按钮样式 = RadioStyle.bind({})

const size: Story<RadioGroupProps> = (args) => {
  const onChange = (e: Event & { target: any }) => {
    console.log(`radio checked:${e.target.value}`);
  }

  return (
    <>
      <Radio.Group defaultValue="a" size="large">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <br/>
      <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <br/>
      <Radio.Group defaultValue="a" size="small" style={{ marginTop: 16 }}>
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </>
  )
}

export const 大小 = size.bind({})