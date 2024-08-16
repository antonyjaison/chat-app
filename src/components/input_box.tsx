import React from 'react';
import { VscSend } from "react-icons/vsc";
import { RiAttachment2 } from "react-icons/ri";

const InputBox = () => {
  return (
    <div className="flex items-center p-2 rounded-lg m-4 mx-10 bg-[#f6f7f7]">
      <input
        type="text"
        className="flex-1 outline-none p-2 text-base text-gray-500 bg-[#f6f7f7] placeholder:text-gray-400"
        placeholder="Type your message here"
      />
      <div className="flex items-center space-x-2">
        <button className="text-red-500 hover:text-red-700 p-2">
            <RiAttachment2 size={24}/>
        </button>
        <button className="text-red-500 hover:text-red-700 p-2 bg-[#fee7e2] rounded-md">
          <VscSend size={24}/>
        </button>
      </div>
    </div>
  );
};

export default InputBox;
