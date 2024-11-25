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
import Conversations from './Conversations';
 // Assurez-vous d'avoir les styles nécessaires

export default function Sidebar() {
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const themeClass = lightTheme ? 'light' : 'dark';

  return (
    <div className={`sidebar-container ${themeClass}`}>
      {/* Header */}
      <div className={`sb-header ${themeClass}`}>
        <div className='other-icons'>
          <IconButton>
            <AccountCircleIcon className={` ${themeClass}`}/>
          </IconButton>
        </div>
        <div className='other-icons'>
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
     <Conversations/>
    </div>
  );
}
