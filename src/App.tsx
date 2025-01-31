// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import Chat from './components/Chat';

// const socket = io('https://servachok-1.onrender.com'); // Подключаемся к серверу

function App() {
  // const [messages, setMessages] = useState<string[]>([]);
  // const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   // Получение сообщений от сервера
  //   socket.on('message', (data: string) => {
  //     setMessages((prevMessages) => [...prevMessages, data]);
  //   });
  // }, [messages]);

  
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (inputValue.trim()) {
  //     socket.emit('chat-message', inputValue); // Отправляем сообщение на сервер
  //     setInputValue('');
  //   }
  // };

  return (
    <div style={{ textAlign: 'center' }}>
     <Chat/>
    </div>
  );
}

export default App;