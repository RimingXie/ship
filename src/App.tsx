import React, { useState } from 'react';
import Button from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import './app.css'
import SubMenu from './components/Menu/subMenu';

import Transition from './components/Transition/transition'

import Row from './components/Grid/row'
import Col from './components/Grid/col'

import Icon from './components/Icon/icon'
import Input from './components/Input/input'
const App: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Input onChange={(e) => { console.log(e) }} />
      <div className="row-demo">
        <Row>
          <Col span={8} order={2}>col-2</Col>
          <Col span={8} order={1}>
            col-1
      </Col>
        </Row>
      </div>
      <Icon icon="coffee" theme="danger" size="10x" />
      <Menu defaultIndex={'0'} onSelect={(index) => { console.log(index) }} defaultOpenSubMenus={['2']}>
        <MenuItem>cool link1</MenuItem>
        <MenuItem>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
          <MenuItem>dropdown3</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu>
      <Button className="rm-button" onClick={(e) => { e.preventDefault(); alert(123) }}>Hello</Button>
      <Button btnType="primary" size="lg">Hello</Button>
      <Button btnType="link" href="https://www.baidu.com">baidu</Button>
      <Button btnType="danger">Hello</Button>
      <div className="alert-demo">
        <Alert closeText="close" onClose={(e) => { console.log(e) }} closable message="Success Text" type="success" description="Success Description Success Description Success Description" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </div>
      <Button size="lg" onClick={() => { setShow(!show) }}> toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left"
      >
        <div>
          <p>asgggggggggggggggadsdw</p>
          <p>asgggggggggggggggadsdw</p>
          <p>asgggggggggggggggadsdw</p>
          <p>asgggggggggggggggadsdw</p>
        </div>
      </Transition>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left"
        wrapper
      >
        <Button>adgsjgf</Button>
      </Transition>
    </div>
  );
}

export default App;
