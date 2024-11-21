import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function ConversationItem({props}) {
  const navigate= useNavigate();
  return (
    <div className='conversation-container' onClick={()=>{navigate('Chat')}}>
        <p className='con-icon'>{props.name[0]}</p>
        <p className='con-title'>{props.name}</p>
        <p className='con-LastMessage'>{props.LastMessage}</p>
        <p className='con-TimesTamp'>{props.TimesTamps}</p>
   
    </div>
  );
}
