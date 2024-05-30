import React from 'react';

const ChatContainer = ({ children }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {children}
    </div>
  );
};

export default ChatContainer;
