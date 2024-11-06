import React, { useState } from 'react';
import Navbar from './Navbar';
import Chat from './Chat';

const ChatApp = () => {
  const [currentRole, setCurrentRole] = useState('Doctor'); // Default role
  const [messages, setMessages] = useState([]);

  // Add a new message to the shared state
  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div>
      <Navbar currentRole={currentRole} setRole={setCurrentRole} />
      
      <div className="chat-container mt-4">
        <Chat
          userRole={currentRole}
          messages={messages}
          addMessage={addMessage}
        />
      </div>
    </div>
  );
};

export default ChatApp;
