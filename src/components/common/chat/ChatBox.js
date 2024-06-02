import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Bạn cần cài đặt react-icons cho đoạn mã này
const ChatBox = () => {
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
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`my-2 p-2 rounded ${
                message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'
              }`}
            >
              {message.text}
            </div>
             
          ))}
        </div>
        
      </div>
      <div className="p-4 bg-gray-100 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l bg-white text-black placeholder-gray-500"
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
  );
};

export default ChatBox;
