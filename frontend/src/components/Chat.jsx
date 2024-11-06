import React, { useState } from 'react';

const Chat = ({ isOpen, onClose, userRole, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");  // To handle the new message input

  if (!isOpen) return null;  // Do not render chat if it's not open

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;  // Don't send empty messages
    onSendMessage(newMessage);  // Call the parent's sendMessage function
    setNewMessage("");  // Clear the input field
  };

  return (
    <div className="absolute bottom-0 right-0 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{userRole} Chat</h3>
        <button onClick={onClose} className="text-red-500">Close</button>
      </div>
      <div className="mt-4 h-48 overflow-y-auto">
        {/* Render all chat messages */}
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === userRole ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.sender === userRole ? 'bg-blue-200' : 'bg-gray-200'}`}>
              <strong>{msg.sender}:</strong> {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type a message..." 
          className="flex-1 border border-gray-300 rounded-lg p-2"
        />
        <button 
          onClick={handleSendMessage} 
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;