import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '../Button'
import Modal from '.'
import { ModalProps } from './modal';

export default {
  title: 'ship-ui/Modal',
  component: Modal
} as Meta;


const defauleButton: Story<ModalProps> = (args) => (
  <>
    <Button onClick={() => {
      Modal.confirm({
        title: 'Do you Want to delete these items?',
        content: 'Some descriptions',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }}>confirm</Button>
    <div style={{ margin: '20px 0' }}>
      <Button style={{ marginRight: 20 }} onClick={() => {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() { },
        });
      }}>info</Button>
      <Button style={{ marginRight: 20 }} onClick={() => {
        Modal.success({
          content: 'some messages...some messages...',
        });
      }}>success</Button>
      <Button style={{ marginRight: 20 }} onClick={() => {
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
      }}>error</Button>
      <Button style={{ marginRight: 20 }} onClick={() => {
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
      }}>warning</Button>
    </div>


  </>

)

export const info = defauleButton.bind({});
info.args = {};