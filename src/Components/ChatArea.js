import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

export default function ChatArea({props}) {
  return (
    <div className='ChatArea-Container'>
         <div className='ChatArea-header'>
         <p className='con-icon'>{props.name[0]}</p>
        
        <div className='header-text'>
        <p className='con-title'>{props.name}</p>
        <p className='con-TimesTamp'>{props.TimesTamps}</p>
        </div>
        <IconButton>
        <DeleteIcon />
        </IconButton>
   
    </div>
    <div className='messages-container'>
    <MessageOthers />
    <MessageSelf />
    <MessageOthers />
    <MessageSelf />
    <MessageOthers />
    <MessageSelf />
    <MessageOthers />
    <MessageSelf />
    
    </div>
    <div className='text-input-area'>
    <input placeholder='Tape a Message' className='search-box' />
    <IconButton>
        <SendIcon />
        </IconButton>
    </div>
    </div>
  );
}
