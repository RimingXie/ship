import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Tooltip, TooltipProps } from './tooltip'
import { action } from '@storybook/addon-actions';
import Button from '../Button';


export default {
  title: 'ship-ui/Tooltip',
  component: Tooltip
} as Meta;

const text = <span>prompt text</span>;
const buttonWidth = 70;
const colors = [
  '#eb2f96',
  '#f5222d',
  '#fa541c',
  '#fa8c16',
  '#fadb14',
  '#faad14',
  '#13c2c2',
  '#a0d911',
  '#52c41a',
  '#1890ff',
  '#2f54eb',
  '#722ed1'
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

const Basic: Story<TooltipProps> = (args) => (
  <div style={{ margin: 100 }}>
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  </div>

)
export const 基本用法 = Basic.bind({})
基本用法.args = {}

const ArrowCenter: Story<TooltipProps> = (args) => (
  <div style={{ margin: 100 }}>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
  </div>
)
export const 箭头指向 = ArrowCenter.bind({})
箭头指向.args = {}

const Postion: Story<TooltipProps> = (args) => (
  <div style={{ margin: 100 }}>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Tooltip placement="topLeft" title={text}>
          <Button style={{ width: 70 }}>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text}>
          <Button style={{ width: 70 }}>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text}>
          <Button style={{ width: 70 }}>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Tooltip placement="leftTop" title={text}>
          <Button style={{ width: 70 }}>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text}>
          <Button style={{ width: 70 }}>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text}>
          <Button style={{ width: 70 }}>LB</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <Tooltip placement="rightTop" title={text}>
          <Button style={{ width: 70 }}>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Button style={{ width: 70 }}>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text}>
          <Button style={{ width: 70 }}>RB</Button>
        </Tooltip>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Tooltip placement="bottomLeft" title={text}>
          <Button style={{ width: 70 }}>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text}>
          <Button style={{ width: 70 }}>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text}>
          <Button style={{ width: 70 }}>BR</Button>
        </Tooltip>
      </div>
  </div>
)
export const 位置 = Postion.bind({})
位置.args = {}

const Custom: Story<TooltipProps> = (args) => (
  <p style={{ margin: 100 }}>
    <div>
      {colors.map(color => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button style={{margin: 10}}>{color}</Button>
        </Tooltip>
      ))}
    </div>
    {/* <Divider orientation="left">Custom</Divider> */}
    <div>
      {customColors.map(color => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button style={{margin: 10}}>{color}</Button>
        </Tooltip>
      ))}
    </div>
  </p>
)
export const 多彩文字提示 = Custom.bind({})
多彩文字提示.args = {}