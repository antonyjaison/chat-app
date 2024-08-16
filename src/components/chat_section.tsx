import React from 'react';
import ChatMessage from './chat_message';

const ChatSection = () => {
  const messages = [
    {
      text: "Take this part of your letter seriously because it's likely one of your first genuine opportunities to make a personal, positive impression on a prospective employer. You want your words to invite them to keep reading and to convey exactly why you're the best choice for their open position. Review your language to ensure it's concise and informative. If you're applying to multiple positions, take great care to edit your letter so that the first paragraph is personal and relevant to the exact position you want.",
      isSender: false,
    },
    { text: "You've a good folio", isSender: true },
    { text: "However we’re looking for someone with a little more experience!", isSender: true },
    {
      text: "Take this part of your letter seriously because it's likely one of your first genuine opportunities to make a personal, positive impression on a prospective employer. You want your words to invite them to keep reading and to convey exactly why you're the best choice for their open position. Review your language to ensure it's concise and informative. If you're applying to multiple positions, take great care to edit your letter so that the first paragraph is personal and relevant to the exact position you want.",
      isSender: false,
    },
    { text: "You've a good folio", isSender: true },
    { text: "However we’re looking for someone with a little more experience!", isSender: true },
    {
      text: "Take this part of your letter seriously because it's likely one of your first genuine opportunities to make a personal, positive impression on a prospective employer. You want your words to invite them to keep reading and to convey exactly why you're the best choice for their open position. Review your language to ensure it's concise and informative. If you're applying to multiple positions, take great care to edit your letter so that the first paragraph is personal and relevant to the exact position you want.",
      isSender: false,
    },
    { text: "You've a good folio", isSender: true },
    { text: "However we’re looking for someone with a little more experience!", isSender: true },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col space-y-2 px-6 pb-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isSender={message.isSender} />
        ))}
      </div>

    </div>
  );
};

export default ChatSection;
