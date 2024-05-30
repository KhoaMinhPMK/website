import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      {children}
    </main>
  );
};

export default MainContent;
