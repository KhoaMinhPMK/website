import React from 'react';

const BotMessage = ({ text }) => {
  return (
    <div className="my-2 p-2 rounded bg-gray-300 text-black self-start">
      {text}
    </div>
  );
};

export default BotMessage;
