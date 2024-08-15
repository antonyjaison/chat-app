import React from 'react';

const ContactHeader = ({ name, avatar, isTyping }) => {
  return (
    <div className="flex items-center p-[14px] bg-gray-100 border-b border-gray-300">
      <img 
        src={avatar} 
        alt={name} 
        className="w-10 h-10 rounded-full mr-3" 
      />
      <div>
        <div className="flex items-center">
          <span className="font-bold text-gray-900">{name}</span>
          <span className="ml-2 h-2 w-2 bg-green-500 rounded-full"></span>
        </div>
        {isTyping && (
          <p className="text-gray-500 text-sm mt-1">Typing...</p>
        )}
      </div>
    </div>
  );
}

export default ContactHeader;
