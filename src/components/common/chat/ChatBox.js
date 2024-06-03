import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

const ChatBox = ({ sidebarOpen }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Giả lập phản hồi
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'Đây là một phản hồi mô phỏng từ Code Copilot.', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col">
          {messages.map((message, index) => (
            message.sender === 'user' ? 
              <UserMessage key={index} text={message.text} /> : 
              <BotMessage key={index} text={message.text} />
          ))}
        </div>
      </div>
      <div className="p-4 flex justify-center items-center" style={{ backgroundColor: 'transparent' }}>
        <div className="flex-1 max-w-[800px] flex items-center border rounded-full" style={{ backgroundColor: 'transparent', borderColor: '#ccc' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 text-black placeholder-gray-500 rounded-l-full"
            style={{ backgroundColor: '#f0f0f0' }}
            placeholder="Nhập tin nhắn của bạn"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-500 rounded-full ml-2"
          >
            <FaPaperPlane className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
