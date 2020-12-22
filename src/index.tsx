// export { default as Button } from './components/Button'
// export { default as Menu } from './components/Menu'
// export { default as Alert } from './components/Alert'
// export { default as Row } from './components/Grid/row'
// export { default as Col } from './components/Grid/col'
// export { default as Icon } from './components/Icon'
// export { default as Input } from './components/Input'
// export { default as Transition } from './components/Transition'

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App'
import './styles/index.scss'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

reportWebVitals(); 