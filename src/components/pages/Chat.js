import React, { useState } from 'react';
import Sidebar from '../common/chat/Sidebar';
import ChatBox from '../common/chat/ChatBox';
import { BiMenu } from 'react-icons/bi';

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <ChatBox />
      </div>
      {!sidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-blue-500 rounded-full text-white"
          onClick={toggleSidebar}
        >
          <BiMenu className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default Chat;
