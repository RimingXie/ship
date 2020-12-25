import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Popconfirm, PopconfirmProps } from './popconfirm'
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import message from '../Message';

function confirm(e: React.MouseEvent<HTMLElement>) {
  console.log(e);
  message.success('Click on Yes',0);
}

function cancel(e: React.MouseEvent<HTMLElement>) {
  console.log(e);
  message.error('Click on No');
}
const text = 'Are you sure to delete this task?';

export default {
  title: 'ship-ui/Popconfirm',
  component: Popconfirm
} as Meta;

const defaultPopconfirm: Story<PopconfirmProps> = (args) => (
  <p style={{ margin: 200 }}>
    <Popconfirm
      title="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <a href="#">Delete</a>
    </Popconfirm>
    <div className="demo">
      <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
        <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button style={{ width: 70 }}>TL</Button>
        </Popconfirm>
        <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button style={{ width: 70 }}>Top</Button>
        </Popconfirm>
        <Popconfirm
          placement="topRight"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{ width: 70 }}>TR</Button>
        </Popconfirm>
      </div>
      <div style={{ width: 70, float: 'left' }}>
        <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button style={{ width: 70 }}>LT</Button>
        </Popconfirm>
        <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button style={{ width: 70 }}>Left</Button>
        </Popconfirm>
        <Popconfirm
          placement="leftBottom"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{ width: 70 }}>LB</Button>
        </Popconfirm>
      </div>
      <div style={{ width: 70, marginLeft: 304 }}>
        <Popconfirm
          placement="rightTop"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{ width: 70 }}>RT</Button>
        </Popconfirm>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button style={{ width: 70 }}>Right</Button>
        </Popconfirm>
        <Popconfirm
          placement="rightBottom"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{ width: 70 }}>RB</Button>
        </Popconfirm>
      </div>
      <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="bottomLeft"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{ width: 70 }}>BL</Button>
        </Popconfirm>
        <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button style={{ width: 70 }}>Bottom</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottomRight"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{ width: 70 }}>BR</Button>
        </Popconfirm>
      </div>
    </div>
  </p>
)

export const Info = defaultPopconfirm.bind({})
Info.args = {}