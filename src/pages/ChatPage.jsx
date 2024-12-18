import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TyceLogo from '../assets/TyceLogo.png'; 
import UserProfile from '../assets/chico.png'; 

const ChatPage = () => {
  const location = useLocation();
  const [messages, setMessages] = useState(location.state?.messages || []);
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('Scotiabank Web Application');
  const [isEditing, setIsEditing] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const response = await fetch('http://localhost:5000/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();

      setMessages([
        ...messages,
        { role: 'user', content: input },
        { role: 'gpt', content: data.message },
      ]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const toggleEditing = () => {
    setIsEditing(true);
  };

  const updateTitle = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Header with Editable Title */}
        <div className="bg-white p-4 border-b border-gray-300 flex justify-center">
          {isEditing ? (
            <input
              type="text"
              className="border rounded-md p-1 text-black bg-white focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={updateTitle}
              onKeyDown={updateTitle}
              autoFocus
            />
          ) : (
            <h1
              className="text-xl text-black cursor-pointer"
              onClick={toggleEditing}
            >
              {title}
            </h1>
          )}
        </div>

        {/* Chat Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* Profile Picture */}
              {message.role === 'gpt' && (
                <img
                  src={TyceLogo}
                  alt="Tyce Logo"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}

              <div
                className={`p-4 rounded-md max-w-lg ${
                  message.role === 'user'
                    ? 'bg-gray-300 text-black'
                    : 'bg-white text-black'
                }`}
              >
                <p className="text-sm text-gray-500 mb-1">
                  {message.role === 'user' ? 'You' : 'Tyce'}
                </p>
                <p className="text-black">{message.content}</p>
              </div>

              {/* User Profile Picture */}
              {message.role === 'user' && (
                <img
                  src={UserProfile}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 bg-white border-t border-gray-300">
          <div className="flex items-center">
            <textarea
              className="flex-1 border bg-white text-black p-2 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              rows="2"
            />
            <button
              onClick={sendMessage}
              className="ml-4 bg-gray-100 text-black border px-4 py-2 rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

