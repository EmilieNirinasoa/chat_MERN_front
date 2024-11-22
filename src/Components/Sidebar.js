import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from './ConversationItem';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const [ligththeme,setLigthTheme]=useState(true);
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
    const navigate= useNavigate();
  return (
    <div className='sidebar-container'>
    <div className={'sb-header ' + ((ligththeme)? '' :'dark')}>
    <div >
    <IconButton className={'icon ' + ((ligththeme)? '' :'dark')}>
    <AccountCircleIcon/>
    </IconButton>
    </div>
    <div >
    <IconButton onClick={()=>{navigate('Users')}} className={'sb-header ' + ((ligththeme)? '' :'dark')}>
    <PersonAddAlt1RoundedIcon/>
    </IconButton>
    <IconButton onClick={()=>{navigate('Groups')}} className={'sb-header ' + ((ligththeme)? '' :'dark')}>
    <GroupAddIcon/>
    </IconButton>
    <IconButton onClick={()=>{navigate('create_Group')}} className={'sb-header ' + ((ligththeme)? '' :'dark')}>
    <AddCircleIcon/>
    </IconButton>
    <IconButton onClick={()=>{setLigthTheme((PrevValue)=>{
        return!PrevValue;
    })}} className={'sb-header ' + ((ligththeme)? '' :'dark')}>
        {!ligththeme  && <NightlightIcon/>}
        {ligththeme  && <LightModeIcon/>}
    </IconButton>
    </div>
    
    </div>
    <div className={'sb-search ' + ((ligththeme)? '' :'dark')}>
        <IconButton>
        <SearchIcon />
        </IconButton>

    <input placeholder='search'  className={'search-box ' + ((ligththeme)? '' :'dark')}/>
    </div>
    <div  className={'sb-conversation ' + ((ligththeme)? '' :'dark')} >
    {conversations.map((conversation)=>{
        return <ConversationItem  props={conversation} key={conversation.name}  />
    })}
    </div>
    </div>
  );
}
