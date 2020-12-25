import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Timeline from './index'
import { TimelineProps } from './timeline'
import Divider from '../Divider';
import Icon from '../Icon';

export default {
  title: 'ship-ui/Timeline',
  component: Timeline,
} as Meta;

const Basic: Story<TimelineProps> = (args) => (
  <>
    <Divider>基本用法</Divider>
    <Timeline {...args}>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  </>
)
export const 基本用法 = Basic.bind({});
基本用法.args = {

}

const Color: Story<TimelineProps> = (args) => (
  <>
    <Divider>圆圈颜色</Divider>
    <Timeline  {...args}>
      <Timeline.Item color="#52c41a">Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="#52c41a">Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="#ff4d4f">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item color="rgba(0,0,0,.25)">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item color="rgba(0,0,0,.25)">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
    </Timeline>
  </>
)
export const 圆圈颜色 = Color.bind({});
圆圈颜色.args = {

}

const LastNodeAndReversing: Story<TimelineProps> = (args) => {
  console.log(args)
  return (
    (
      <>
        <Divider>最后一个及排序</Divider>
        <Timeline {...args} >
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
      </>
    )
  )
}
export const 最后一个及排序 = LastNodeAndReversing.bind({});
最后一个及排序.args = {
  pending: 'Recording...',
  reverse: true
}



const Custom: Story<TimelineProps> = (args) => (
  <>
    <Divider>自定义时间轴点</Divider>
    <Timeline {...args}>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item dot={<Icon icon="clock" />} color="red">
        Technical testing 2015-09-01
          </Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  </>
)
export const 自定义时间轴点 = Custom.bind({});
自定义时间轴点.args = {
}

const Alternate: Story<TimelineProps> = (args) => (
  <>
    <Divider>交替展现</Divider>
    <Timeline {...args}>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item dot={<Icon icon="clock" />}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo.
          </Timeline.Item>
      <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item dot={<Icon icon="clock" />}>
        Technical testing 2015-09-01
          </Timeline.Item>
    </Timeline>
  </>
)
export const 交替展现 = Alternate.bind({});
交替展现.args = {
  mode: 'alternate'
}

const Label: Story<TimelineProps> = (args) => (
  <>
    <Divider>标签</Divider>
    <Timeline {...args}>
      <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
      <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
      <Timeline.Item>Technical testing</Timeline.Item>
      <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
    </Timeline>
  </>
)
export const 标签 = Label.bind({});
标签.args = {
  mode: 'right'
}

const RightAlternate: Story<TimelineProps> = (args) => (
  <>
    <Divider>右侧时间轴点</Divider>
    <Timeline {...args}>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item dot={<Icon icon="clock" />} color="red">
        Technical testing 2015-09-01
          </Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  </>
)
export const 右侧时间轴点 = RightAlternate.bind({});
右侧时间轴点.args = {
  mode: 'right'
}