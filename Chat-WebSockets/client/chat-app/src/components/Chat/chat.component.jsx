import React from 'react';
import './chat.css'

export const Chat = ({ message, setMessage, sendMessage}) => {

  return (
    <div className='centrar'>
      <input className='Text-Field' type="text" value={message}
        onChange={(e) => setMessage(e.target.value)} />
      <button className='button' onClick={sendMessage}>send</button>
    </div>
  )
}
