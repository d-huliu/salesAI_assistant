import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TyceLogo from '../assets/TyceLogo.png';
import { useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown } from 'lucide-react';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [showTopDeals, setShowTopDeals] = useState(false);
  const navigate = useNavigate();

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [projectTitle, setProjectTitle] = useState('New Project');
  // Handle editing title
  const handleTitleEdit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsEditingTitle(false); // Exit edit mode
    }
  };

  

  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent empty inputs

    try {
      // Send message to GPT API
      const response = await fetch('http://localhost:5000/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();

      // Navigate to ChatPage with the initial conversation data
      navigate('/chat', {
        state: {
          messages: [
            { role: 'user', content: input },
            { role: 'gpt', content: data.message },
          ],
        },
      });

      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };



  const toggleTopDeals = () => {
    setShowTopDeals(!showTopDeals);
  };

  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 flex flex-col items-center justify-start overflow-y-auto">
        
      {/* Editable Project Title */}
      <div className="bg-white p-6 border-b w-screen flex flex-col mb-7 items-center border-gray-300">
          {isEditingTitle ? (
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              onKeyDown={handleTitleEdit}
              onBlur={() => setIsEditingTitle(false)}
              autoFocus
              className="text-xl text-black font-semibold border p-1 rounded bg-white focus:outline-none"
            />
          ) : (
            <h1
              className="text-xl text-black cursor-pointer font-semibold"
              onClick={() => setIsEditingTitle(true)}
            >
              {projectTitle}
            </h1>
          )}
        </div>

        <div className="w-full max-w-4xl flex-1 flex flex-col bg-gray-50">
        
       
          <div className="flex flex-col items-center mb-6">
            
            <img src={TyceLogo} alt="Tyce Logo" className="w-20 h-20 mb-12 mt-4" />
            <p className="text-black text-2xl">Hi Chico, I'm Tyce, your Sales Partner.</p>
            <p className="text-black text-2xl mb-6">I'm here to help you sell projects.</p>
            <p className="text-black text-xl mb-6">What do you need assistance with today?</p>
          </div>
          <div className="flex space-x-4 mb-6 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-md">RFP</button>
            <button className="bg-black text-white px-8 py-3 rounded-md">Pricing</button>
            <button className="bg-black text-white px-8 py-3 rounded-md">Marketing</button>
            <button className="bg-black text-white px-8 py-3 rounded-md">Contract</button>
          </div>
          <div className="bg-white border border-gray-300 rounded-md p-4 mb-4">
            <div className="flex items-center">
              <textarea
                className="flex-1 border-none bg-transparent p-0 focus:outline-none text-black"
                placeholder="Let me know how I can help you!"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />
              <button onClick={sendMessage}
                className="mt-4 bg-black text-white px-4 py-2 rounded-md">
                Send
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-4 mb-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-sm mb-0">Attach Documents(meetings, notes, briefs, etc) to start a new project</p>
              <div className="flex items-center">
                <input
                  type="file"
                  className="sr-only"
                  id="document-upload"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                />
                <label htmlFor="document-upload" className="px-4 py-2 bg-gray-200 text-black border rounded-md cursor-pointer">
                  Choose File
                </label>
                <button className="ml-4 bg-black text-white px-4 py-2 rounded-md">Upload</button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={toggleTopDeals}
            >
              <p className="text-black font-medium">Top deals this quarter</p>
              {showTopDeals ? <ChevronUp size={20} stroke="black"/> : <ChevronDown size={20} stroke="black"/>}
            </div>
            {showTopDeals && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-white rounded-md p-4 shadow">
                  <h3 className="text-gray-700 font-medium mb-2">App Development</h3>
                  <p className="text-gray-500">6 Deals</p>
                  <p className="text-gray-500">$1M Revenue</p>
                  <p className="text-gray-500">Banking</p>
                </div>
                <div className="bg-white rounded-md p-4 shadow">
                  <h3 className="text-gray-700 font-medium mb-2">ERP</h3>
                  <p className="text-gray-500">10 Deals</p>
                  <p className="text-gray-500">$5M Revenue</p>
                  <p className="text-gray-500">Banking</p>
                </div>
                <div className="bg-white rounded-md p-4 shadow">
                  <h3 className="text-gray-700 font-medium mb-2">AI POCs</h3>
                  <p className="text-gray-500">7 Deals</p>
                  <p className="text-gray-500">$500K Revenue</p>
                  <p className="text-gray-500">Industrial</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
