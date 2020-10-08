// REACT
import React from 'react';

// STYLES
import styles from './messages.module.css';

// COMPONENTS
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

const Messages = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Messages;
