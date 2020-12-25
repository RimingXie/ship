import React, { useState } from 'react';
import Button from './components/Button';
import Popconfirm from './components/Popconfirm/popconfirm'
import message from './components/Message/index'
import Progress from './components/Progress/progress';
import Divider from './components/Divider';

const App: React.FC = () => {
  const [num, setNum] = useState(20);
  function confirm(e: React.MouseEvent<HTMLElement>) {
    console.log(e);
    message.success('Click on Yes');
  }

  function cancel(e: React.MouseEvent<HTMLElement>) {
    console.log(e);
    message.error('Click on No');
  }
  const text = 'Are you sure to delete this task?';
  React.useEffect(() => {
    setInterval(() => {
      let random = Math.ceil(Math.random() * 100)
      setNum(random)
    }, 2000);
  }, [])

  return (
    <>
      <Progress percent={30} />
      <Progress percent={num} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
      <Divider>小型进度条</Divider>
      <div style={{ width: 170 }}>
        <Progress percent={30} size="small" />
        <Progress percent={num} size="small" status="active" />
        <Progress percent={70} size="small" status="exception" />
        <Progress percent={100} size="small" />
      </div>
      <Divider>圈形的进度</Divider>
      <div>
        <Progress type="circle" percent={num} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </div>
      <Divider>小型进度圈</Divider>
      <div>
        <Progress type="circle" percent={num} width={80} />
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
}

export default App;