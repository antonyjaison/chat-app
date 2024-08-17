import React from "react";

const ChatMessage = ({ message, isSender }) => {
    return (
        <>
            <div
                className={`max-w-xl p-3 rounded-lg mb-2 ${isSender ? 'bg-red-500 self-end text-white' : 'bg-gray-200 text-gray-800 self-start'}`}
            >
                {message}
            </div>
        </>
    );
};

export default ChatMessage;