import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message } from '../types';
import MessageComponent from './Message';


const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);

  // Подключение к серверу
  useEffect(() => {
    const newSocket = io('https://servachok-1.onrender.com'); // Укажите URL вашего сервера
    setSocket(newSocket);

    // Обработка входящих сообщений
    newSocket.on('chat message', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, { text: message }]);
    });

    // Очистка при размонтировании
    return () => {
      newSocket.disconnect();
    };
  }, []);

  // Отправка сообщения
  const sendMessage = () => {
    if (input.trim() && socket) {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  return (
    <div >
      <div >
        {messages.map((message, index) => (
          <MessageComponent key={index} message={message} />
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          style={styles.input}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'scroll',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  inputContainer: {
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Chat;