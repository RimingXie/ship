import React, { useState } from 'react';
import Modal from './components/Modal'
import Button from './components/Button/button'
import Icon from './components/Icon/icon'

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    Modal.confirm({
      title: 'This is a notification message',
      centered: true,
      content: (
        <div>
          this is success 
        </div>
      ),
      onOk() {},
    });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button btnType="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal 
      title="Basic Modal" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" btnType="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default App;