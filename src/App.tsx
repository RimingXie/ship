import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import './app.css'
import SubMenu from './components/Menu/subMenu';
const App: React.FC = () => {
  return (
    <div className="App">
      <Menu defaultIndex={'0'} onSelect={(index) => { console.log(index) }} mode="vertical" defaultOpenSubMenus={['2']}>
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
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">baidu</Button>
      <Button btnType={ButtonType.Danger}>Hello</Button>
      <div className="alert-demo">
        <Alert closeText="close" onClose={(e) => { console.log(e) }} closable message="Success Text" type={AlertType.Success} description="Success Description Success Description Success Description" />
        <Alert message="Info Text" type={AlertType.Info} />
        <Alert message="Warning Text" type={AlertType.Warning} />
        <Alert message="Error Text" type={AlertType.Error} />
      </div>

    </div>
  );
}

export default App;
