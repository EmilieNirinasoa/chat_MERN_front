import React from 'react';

export default function ConversationItem({props}) {
  return (
    <div className='conversation-container'>
        <p className='con-icon'>{props.name[0]}</p>
        <p className='con-title'>{props.name}</p>
        <p className='con-LastMessage'>{props.LastMessage}</p>
        <p className='con-TimesTamp'>{props.TimesTamps}</p>
   
    </div>
  );
}
