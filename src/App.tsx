import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://servachok-1.onrender.com'); // Подключаемся к серверу

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Получение сообщений от сервера
    socket.on('chat-message', (data: string) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      socket.emit('chat-message', inputValue); // Отправляем сообщение на сервер
      setInputValue('');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Cha cha cha Application</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;