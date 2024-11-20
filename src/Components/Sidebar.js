import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from './ConversationItem';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { IconButton } from '@mui/material';

export default function Sidebar() {
    const [conversations,,setConversations]=useState([
        {
            name:'Test#1',
            LastMessage:'Last Message #1',
            TimesTamps:'today'
        },
        {
            name:'Test#2',
            LastMessage:'Last Message #2',
            TimesTamps:'today'
        },
        {
            name:'Test#3',
            LastMessage:'Last Message #3',
            TimesTamps:'today'
        }
    ]);
  return (
    <div className='sidebar-container'>
    <div className='sb-header'>
    <div >
    <IconButton>
    <AccountCircleIcon/>
    </IconButton>
    </div>
    <div >
    <IconButton>
    <PersonAddIcon/>
    </IconButton>
    <IconButton>
    <GroupAddIcon/>
    </IconButton>
    <IconButton>
    <AddCircleIcon/>
    </IconButton>
    <IconButton>
    <NightlightIcon/>
    </IconButton>
    </div>
    
    </div>
    <div className='sb-search'>
        <IconButton>
        <SearchIcon />
        </IconButton>

    <input placeholder='search' className='search-box'/>
    </div>
    <div className='sb-conversation'>
    {conversations.map((conversation)=>{
        return <ConversationItem  props={conversation} />
    })}
    </div>
    </div>
  );
}
