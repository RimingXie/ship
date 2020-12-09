import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'
const App: React.FC = () => {
  return (
    <div className="App">
      <Button>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">baidu</Button>
      <Button btnType={ButtonType.Danger}>Hello</Button>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
