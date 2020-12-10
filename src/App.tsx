import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import './app.css'
const App: React.FC = () => {
  return (
    <div className="App">
      <Button className="rm-button" onClick={() => { alert(123) }}>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">baidu</Button>
      <Button btnType={ButtonType.Danger}>Hello</Button>
      <div className="alert-demo">
        <Alert closeText="close" onClose={(e) => {console.log(e)}} closable message="Success Text" type={AlertType.Success} description="Success Description Success Description Success Description" />
        <Alert message="Info Text" type={AlertType.Info} />
        <Alert message="Warning Text" type={AlertType.Warning} />
        <Alert message="Error Text" type={AlertType.Error} />
      </div>

    </div>
  );
}

export default App;
