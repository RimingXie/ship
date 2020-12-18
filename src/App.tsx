import React from 'react';
import message from './components/Message/message'

class App extends React.Component{
  componentDidMount(){
    message.config({
      className: 'test-classname',
      content: '提示内容',
      duration: 0,
      icon:'bomb',
      style: {color: 'red'},
      onClose:() => {
        console.log(123)
      },
      getContainer: () => {
        console.log(456)
      }
    })
    // message.info('This is a normal message')
    // message.warning('This is a normal message')
    // message.warn('This is a normal message')
    // message.success('This is a normal message')
    // message.error('This is a normal message')
  }

  render(){
    return(
      <div></div>
    )
  }
}

export default App