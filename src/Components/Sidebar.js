import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from './ConversationItem';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './Features/themeSlice';
 // Assurez-vous d'avoir les styles nécessaires

export default function Sidebar() {
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [conversations, setConversations] = useState([
    { name: 'Test#1', LastMessage: 'Last Message #1', TimeStamps: 'today' },
    { name: 'Test#2', LastMessage: 'Last Message #2', TimeStamps: 'today' },
    { name: 'Test#3', LastMessage: 'Last Message #3', TimeStamps: 'today' },
  ]);

  const themeClass = lightTheme ? 'light' : 'dark';

  return (
    <div className={`sidebar-container ${themeClass}`}>
      {/* Header */}
      <div className={`sb-header ${themeClass}`}>
        <div>
          <IconButton>
            <AccountCircleIcon className={` ${themeClass}`}/>
          </IconButton>
        </div>
        <div>
          <IconButton onClick={() => navigate('Users')}>
            <PersonAddIcon  className={` ${themeClass}`}/>
          </IconButton>
          <IconButton onClick={() => navigate('Groups')}>
            <GroupAddIcon  className={` ${themeClass}`}/>
          </IconButton>
          <IconButton onClick={() => navigate('create_Group')}>
            <AddCircleIcon className={` ${themeClass}`}/>
          </IconButton>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lightTheme ? <LightModeIcon /> : <NightlightIcon className={` ${themeClass}`}/>}
          </IconButton>
        </div>
      </div>

      {/* Search */}
      <div className={`sb-search ${themeClass}`}>
        <IconButton>
          <SearchIcon className={` ${themeClass}`}/>
        </IconButton>
        <input
          placeholder="Search"
          className={`search-box ${themeClass}`}
        />
      </div>

      {/* Conversations */}
      <div className={`sb-conversation ${themeClass}`}>
        {conversations.map((conversation) => (
          <ConversationItem props={conversation} key={conversation.name} />
        ))}
      </div>
    </div>
  );
}
