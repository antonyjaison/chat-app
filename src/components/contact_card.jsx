import React from 'react';

const ContactCard = ({ name, avatar, timeAgo, message }) => {
  return (
    <div className="flex items-start p-4 border-b border-gray-300 cursor-pointer">
      <img 
        src={avatar} 
        alt={name} 
        className="w-10 h-10 rounded-full mr-3" 
      />
      <div>
        <div className="flex items-center">
          <span className="font-bold text-gray-900">{name}</span>
          <span className="text-gray-500 mx-2">•</span>
          <span className="text-gray-500 text-sm">{timeAgo}</span>
        </div>
        <p className="text-gray-700 mt-1">{message}</p>
      </div>
    </div>
  );
}

export default ContactCard;
