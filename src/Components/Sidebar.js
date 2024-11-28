import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
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
import axios from 'axios';

export default function Sidebar() {
  const [conversations, setConversations] = useState([]);
  const lightTheme = useSelector((state) => state.theme.themeKey);
useState(()=>{
  console.log('lightTheme',(state) => state.theme.themeKey)
})
  
  const themeClass = lightTheme ? 'light' : 'dark';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (!userData) {
    console.log('User not authenticated');
    navigate('/');
  }

  const user = userData?.data;

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${user?.token}` },
        };
        const response = await axios.get('http://localhost:8080/chat/', config);
        setConversations(response.data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();
  }, [user?.token]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`sidebar-container ${themeClass}`}>
      {/* Header */}
      <div className={`sb-header ${themeClass}`}>
        <div className="other-icons">
          <IconButton>
            <AccountCircleIcon className={`${themeClass}`} />
          </IconButton>
        </div>
        <div className="other-icons">
          <IconButton onClick={() => navigate('Users')}>
            <PersonAddIcon className={`${themeClass}`} />
          </IconButton>
          <IconButton onClick={() => navigate('Groups')}>
            <GroupAddIcon className={`${themeClass}`} />
          </IconButton>
          <IconButton onClick={() => navigate('create_Group')}>
            <AddCircleIcon className={`${themeClass}`} />
          </IconButton>
          <IconButton onClick={handleToggleTheme()}>
            {lightTheme ? (
              <LightModeIcon className={`${themeClass}`} />
            ) : (
              <NightlightIcon className={`${themeClass}`} />
            )}
          </IconButton>
        </div>
      </div>

      {/* Search */}
      <div className={`sb-search ${themeClass}`}>
        <IconButton>
          <SearchIcon className={`${themeClass}`} />
        </IconButton>
        <input
          placeholder="Search"
          className={`search-box ${themeClass}`}
        />
      </div>

      {/* Conversations */}
      <div className={`sb-conversations ${themeClass}`}>
        {conversations.map((conversation, index) => {
          const chatName = conversation.isGroupChat
            ? conversation.chatName
            : conversation.users.find((u) => u._id !== userData.data.id)?.name;

          return (
            <div
              key={conversation._id}
              className="conversation-container"
              onClick={() => navigate(`chat/${conversation._id}&${chatName}`)}
            >
              <p className={`con-icon ${themeClass}`}>{chatName?.[0] || '?'}</p>
              <p className={`con-title ${themeClass}`}>{chatName || 'Unknown'}</p>
              <p className={`con-LastMessage ${themeClass}`}>
                {conversation.LatestMessage?.content || 'No previous message'}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
