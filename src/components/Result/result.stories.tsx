import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {Result, ResultProps} from './result';
import Button from '../Button';
import Icon from '../Icon';

export default {
  title: 'ship-ui/Result',
  component: Result
} as Meta;

const Info: Story<ResultProps> = (args) => {
  return(
    <Result
    title="Your operation has been executed"
    extra={
      <Button btnType="primary" key="console">
        Go Console
      </Button>
    }
    {...args}
  />
  )
}

export const 展示处理结果 = Info.bind({})
展示处理结果.args ={}

const Success: Story<ResultProps> = (args) => {
  return(
    <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button btnType="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
  )
}

export const 成功的结果 = Success.bind({})

const Warning: Story<ResultProps> = (args) => {
  return(
    <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button btnType="primary" key="console">
        Go Console
      </Button>
    }
  />
  )
}

export const 警告类型的结果 = Warning.bind({})

const Error: Story<ResultProps> = (args) => {
  return(
    <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button btnType="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  >
  </Result>
  )
}

export const 错误反馈 = Error.bind({})

const BasicIcon: Story<ResultProps> = (args) => {
  return(
    <Result
    icon={<Icon icon="smile-wink" />}
    title="Great, we have done all the operations!"
    extra={<Button btnType="primary">Next</Button>}
  />
  )
}

export const 自定义icon = BasicIcon.bind({})

const err403: Story<ResultProps> = (args) => {
  return(
    <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button btnType="primary">Back Home</Button>}
  />
  )
}

export const 错误403 = err403.bind({})

const err404: Story<ResultProps> = (args) => {
  return(
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button btnType="primary">Back Home</Button>}
  />
  )
}

export const 错误404 = err404.bind({})

const err500: Story<ResultProps> = (args) => {
  return(
    <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button btnType="primary">Back Home</Button>}
  />
  )
}

export const 错误500 = err500.bind({})