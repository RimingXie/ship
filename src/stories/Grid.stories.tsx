import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Row, RowProps } from '../components/Grid/row'
import { Col, ColProps } from '../components/Grid/col'

export default {
  title: "ship-ui/Grid",
  component: Row
} as Meta;

const defaultGrid: Story<RowProps & ColProps> = (args) => {
  return (
    <>
      <Row {...args}>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </>
  )
}

export const Info = defaultGrid.bind({})
Info.args = {

}