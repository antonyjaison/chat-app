import React from 'react';
import { FaSearch } from 'react-icons/fa';

const LeftHeader = () => {
  return (
    <div className="w-full p-4 border-b-gray-300 border">
      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md p-2 shadow-sm">
        <FaSearch className="text-gray-400 mr-2" />
        <input 
          type="text" 
          className="w-full bg-transparent focus:outline-none" 
          placeholder="Search" 
        />
      </div>
    </div>
  );
}

export default LeftHeader;
