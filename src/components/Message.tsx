import React from 'react';
import { Message } from '../types';

const MessageComponent: React.FC<{ message: Message }> = ({ message }) => {
  return (
    <div style={styles.message}>
      {message.text}
    </div>
  );
};

const styles = {
  message: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
  },
};

export default MessageComponent;