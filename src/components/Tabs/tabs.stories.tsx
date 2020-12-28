import React, { Component } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import Tabs, { TabsProps } from './tabs'
import Icon from '../Icon';
const { TabPane } = Tabs;
export default {
  title: 'ship-ui/Tabs',
  component: Tabs
} as Meta;

const Basic: Story<TabsProps> = () => {
  const callback = (key: string) => {

  };
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
    </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
    </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
    </TabPane>
    </Tabs>
  )
}

export const 基本用法 = Basic.bind({})

const Disabled: Story<TabsProps> = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        Tab 1
    </TabPane>
      <TabPane tab="Tab 2" disabled key="2">
        Tab 2
    </TabPane>
      <TabPane tab="Tab 3" key="3">
        Tab 3
    </TabPane>
    </Tabs>
  )
}

export const 禁用 = Disabled.bind({})

const Centered: Story<TabsProps> = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
    </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
    </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
    </TabPane>
    </Tabs>
  )
}

export const 居中 = Centered.bind({})

const HasIcon: Story<TabsProps> = () => {
  return (
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <span className="anticon"><Icon icon="comment-dots" /></span>
            
          Tab 1
        </span>
        }
        key="1"
      >
        Tab 1
    </TabPane>
      <TabPane
        tab={
          <span>
            <span className="anticon"><Icon icon="cloud-rain" /></span>
          Tab 2
        </span>
        }
        key="2"
      >
        Tab 2
    </TabPane>
    </Tabs>
  )
}

export const 图标 = HasIcon.bind({})
