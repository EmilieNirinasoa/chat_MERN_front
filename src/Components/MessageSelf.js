import React from 'react';

export default function MessageSelf() {
    var props2={name:'you',message:'salut',}
  return (
    <div className='self-message-container'>
   
    <div className='messageBox'>
        <p className='con-LastMessage'>{props2.message}</p>
        <p className='con-TimesTamp'>12:00am</p>
    </div>
    </div>
  );
}
