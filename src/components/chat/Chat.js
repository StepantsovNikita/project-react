import React, { useState } from 'react';
import styles from './styled.module.css'
const ChatMessage = ({ message, onDelete }) => {
  return (
    <div className={styles.message}>
      <span className={styles.messageText}>{message}</span>
      <button onClick={onDelete} className={styles.deleteButton}>Удалить</button>
    </div>
  );
}



const Chat = () => {
  const [messages, setMessages] = useState([]); 
  const [newMessage, setNewMessage] = useState(''); 

  const handleInputChange = (event) => {
    setNewMessage(event.target.value); 
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return; 
    }
    setMessages([...messages, newMessage]); 
    setNewMessage(''); 
  }

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages]; 
    updatedMessages.splice(index, 1); 
    setMessages(updatedMessages); 
  }

  const handleClearChat = () => {
    setMessages([]); 
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chat}>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            onDelete={() => handleDeleteMessage(index)}
          />
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Введите сообщение..."
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>Отправить</button>
        <button onClick={handleClearChat} className={styles.clearButton}>Очистить чат</button>
      </div>
    </div>
  );
}

export default Chat;
