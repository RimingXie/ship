import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Progress, ProgressProps } from './progress'
import Divider from '../Divider';


export default {
  title: 'ship-ui/Progress',
  component: Progress,
} as Meta;

// const styles: React.CSSProperties = {
//   textAlign: 'center'
// }

const defauleProgress: Story<ProgressProps> = (args) => (
  <>
    <Progress {...args} />
    <Progress percent={30} />
    <Progress percent={40} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
    <Divider>小型进度条</Divider>
    <div style={{ width: 170 }}>
      <Progress percent={30} size="small" />
      <Progress percent={40} size="small" status="active" />
      <Progress percent={70} size="small" status="exception" />
      <Progress percent={100} size="small" />
    </div>
    <Divider>圈形的进度</Divider>
    <div>
      <Progress type="circle" percent={40} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
    </div>
    <Divider>小型进度圈</Divider>
    <div>
      <Progress type="circle" percent={40} width={80} />
      <Progress type="circle" percent={70} width={80} status="exception" />
      <Progress type="circle" percent={100} width={80} />
    </div>
    <Divider>自定义文字格式</Divider>
    <div>
      <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
      <Progress type="circle" percent={100} format={() => 'Done'} />
    </div>
  </>
)

export const Default = defauleProgress.bind({});
Default.args = {

};