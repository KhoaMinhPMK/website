import React from 'react';

const QuickChatButtons = () => {
  const buttons = [
    { id: 1, label: 'Hello' },
    { id: 2, label: 'How can I help you?' },
    { id: 3, label: 'Thank you!' },
    { id: 4, label: 'Goodbye' },
  ];

  return (
    <div className="flex space-x-2 p-2 bg-gray-100 border-t border-gray-200">
      {buttons.map((button) => (
        <button
          key={button.id}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => alert(button.label)} // Replace with your own click handler
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default QuickChatButtons;
