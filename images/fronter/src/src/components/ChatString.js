import React from 'react';

export default function ChatString(props) {
  return (
    <div className="chatstring">
      <input onChange={props.onChange} type="text" name="chatstring" value={props.message} />
      <button onClick={props.onClick} type="button">Send</button>
    </div>
  )  
};