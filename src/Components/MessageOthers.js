import React from 'react';
import './myStyles.css'
export default function MessageOthers({props}) {
  //  console.log(props)
  return (
<div className='other-message-container'>
<div className='conversation-container'>
    <p className='con-icon'>{props.sender.name[0]}</p>
    <div className='other-text-content'>
        <p className='con-title'>{props.sender.name}</p>
        <p className='con-LastMessage'>{props.content}</p>
        <p className='con-TimesTamp'>12:00am</p>
    </div>
    </div>
    
    </div>
  );
}
