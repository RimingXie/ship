import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import { Rate, RateProps } from './rate'
import Icon from '../Icon';
import { StarProps } from 'rc-rate/lib/Star';

export default {
  title: 'ship-ui/Rate',
  component: Rate
} as Meta;

const Basic: Story<RateProps> = (args) => {
  return (
    <Rate {...args} />
  )
}

export const 基本使用 = Basic.bind({})
基本使用.args = {}

const HalfStar: Story<RateProps> = (args) => {
  return (
    <Rate allowHalf defaultValue={2.5} />
  )
}

export const 半星 = HalfStar.bind({})

const Copywriting: Story<RateProps> = (args) => {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [value, setValue] = React.useState(3)
  const handleChange = (value: any) => {
    setValue(value);
  };
  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      {value ? <span className="ship-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  )
}

export const 文案展现 = Copywriting.bind({})


const ReadOnly: Story<RateProps> = (args) => {
  return (
    <Rate disabled defaultValue={2} />
  )
}

export const 只读 = ReadOnly.bind({})

const ClearStar: Story<RateProps> = (args) => {
  return (
    <>
      <Rate defaultValue={3} />
      <span className="ant-rate-text">allowClear: true</span>
      <br />
      <Rate allowClear={false} defaultValue={3} />
      <span className="ant-rate-text">allowClear: false</span>
    </>
  )
}

export const 清除 = ClearStar.bind({})

const CustomizeCharacter: Story<RateProps> = (args) => {
  const customIcons = [
    <Icon icon="sad-tear" />,
    <Icon icon="meh-rolling-eyes" />,
    <Icon icon="meh" />,
    <Icon icon="smile-beam" />,
    <Icon icon="smile-wink" />
  ]

  return (
    <>
      <Rate defaultValue={2} character={(origin: any) => origin.index + 1} />
      <br />
      <Rate defaultValue={3} character={(origin: any) => customIcons[origin.index]} />
    </>
  )
}

export const 自定义字符 = CustomizeCharacter.bind({})

const OtherCharacter: Story<RateProps> = (args) => {

  return (
    <>
      <Rate character="A" allowHalf style={{ fontSize: 36 }} />
      <br />
      <Rate character="好" allowHalf />
    </>
  )
}

export const 其他字符 = OtherCharacter.bind({})