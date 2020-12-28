import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'

import { Tag, TagProps } from './tag'
import Button from '../Button';
import Divider from '../Divider';
import Icon from '../Icon';

export default {
  title: 'ship-ui/Tag',
  component: Tag
} as Meta;

const Basic: Story<TagProps> = (args) => {

  function preventDefault(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }
  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </Tag>
      <Tag closable>
        Tag 2
    </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
    </Tag>
    </>
  )
}

export const 基本用法 = Basic.bind({})


const AddAndRemove: Story<TagProps> = (args) => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <Tag
        closable
        visible={visible}
        onClose={() => setVisible(false)}
      >
        Movies
        </Tag>
      <br />
      <Button style={{ marginTop: 20 }} size="sm" onClick={() => setVisible(!visible)}>
        Toggle
        </Button>
    </>
  )
}

export const 控制关闭状态 = AddAndRemove.bind({})


const ColorfulTag: Story<TagProps> = (args) => {

  return (
    <>
      <Divider orientation="left">Custom</Divider>
      <div>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    </>
  )
}

export const 多彩标签 = ColorfulTag.bind({})


const IconTag: Story<TagProps> = (args) => {

  return (
    <>
      <Divider orientation="left">Custom</Divider>
      <div>
        <Tag icon={<Icon icon="address-book" />} color="#f50">1234</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    </>
  )
}

export const 图标标签 = IconTag.bind({})


