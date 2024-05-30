import React from 'react';
import Sidebar from '../common/chat/Sidebar';
import MainContent from '../common/chat/MainContent';
import ChatBox from '../common/chat/ChatBox';

const Chat = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent>
          <ChatBox />
        </MainContent>
      </div>
    </div>
  );
};

export default Chat;
