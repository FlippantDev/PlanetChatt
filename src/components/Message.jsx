import React from 'react';
import { auth } from '../firebase';

const style = {
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '0.5rem',
    wordWrap: 'break-word', // Add wordWrap for line wrap
  },
  message: `shadow-xl py-2 px-3 rounded-br-full rounded-tr-full`,
  name: `text-white-600 text-xs`,
  sent: `bg-[#395dff] text-white float-right rounded-br-full`,
  received: `bg-[#e5e5ea] text-black float-right rounded-br-full`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;

  return (
    <div style={style.messageContainer}>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
