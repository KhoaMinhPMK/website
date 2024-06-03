import React from 'react';

const UserMessage = ({ text }) => {
  return (
    <div className="my-2 p-2 rounded bg-blue-500 text-white self-end max-w-xs">
      {text}
    </div>
  );
};

export default UserMessage;
