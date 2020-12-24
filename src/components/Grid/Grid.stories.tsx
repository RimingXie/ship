import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Row, RowProps } from './row'
import { Col, ColProps } from './col'

export default {
  title: "ship-ui/Grid",
  component: Row,
  argTypes: {
    flex: {
      control: 'text',
      description: 'flex 布局属性',
      table: {
        category: 'col',
      }
    },
    offset: {
      control: 'number',
      description: '栅格左侧的间隔格数，间隔内不可以有栅格',
      table: {
        category: 'col',
      }
    },
    order: {
      control: 'number',
      description: '栅格顺序',
      table: {
        category: 'col',
      }
    },
    pull: {
      control: 'number',
      description: '栅格向左移动格数',
      table: {
        category: 'col',
      }
    },
    push: {
      control: 'number',
      description: '栅格向右移动格数',
      table: {
        category: 'col',
      }
    },
    span: {
      control: 'number',
      description: '栅格占位格数，为 0 时相当于 `display: none`',
      table: {
        category: 'col',
      }
    }
  }
} as Meta;

const defaultGrid: Story<RowProps & ColProps> = (args) => {
  let colProps: ColProps = {};
  if (args.flex) colProps.flex = args.flex;
  if (args.offset) colProps.offset = args.offset;
  if (args.order) colProps.order = args.order;
  if (args.pull) colProps.pull = args.pull;
  if (args.push) colProps.push = args.push;
  if (args.span) colProps.span = args.span;
  return (
    <div className="grid-demo">
      <Row {...args}>
        <Col {...colProps}>col</Col>
      </Row>
      <Row {...args}>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row {...args}>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row {...args}>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </div>
  )
}

export const Info = defaultGrid.bind({})
Info.args = {

}