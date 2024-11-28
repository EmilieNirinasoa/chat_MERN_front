import React from 'react';
import './myStyles.css'
export default function MessageSelf({props}) {
  console.log('props',props,'fff')
  return (
    <div className='self-message-container'>
   
    <div className='messageBox'>
        <p className='con-LastMessage'>{props.content}</p>
        <p className='con-TimesTamp'>12:00am</p>
    </div>
    </div>
  );
}
