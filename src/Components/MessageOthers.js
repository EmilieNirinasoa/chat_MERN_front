import React from 'react';

export default function MessageOthers() {
    var props1={name:'Emilie',LastMessage:'salut'}
    
  return (
<div className='other-message-container'>
<div className='conversation-container'>
    <p className='con-icon'>{props1.name[0]}</p>
    <div className='other-text-content'>
        <p className='con-title'>{props1.name}</p>
        <p className='con-LastMessage'>{props1.LastMessage}</p>
        <p className='con-TimesTamp'>12:00am</p>
    </div>
    </div>
    
    </div>
  );
}
