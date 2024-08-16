import React from "react";

const ChatMessage = ({ message, isSender }) => {
    return (
        <>
            <div
                className={`max-w-xl p-3 rounded-lg text-white mb-2 ${isSender ? 'bg-red-500 self-end' : 'bg-gray-200 text-gray-800 self-start'}`}
            >
                {message}
            </div>
        </>
    );
};

export default ChatMessage;