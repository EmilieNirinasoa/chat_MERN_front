import React, { useEffect, useState } from 'react';
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
import {refreshSidebarFun} from './Features/themeSlice';
import {myContext} from './MainContainer'
import axios from 'axios';

 // Assurez-vous d'avoir les styles nécessaires

export default function Sidebar() {
  const [Conversations,setConversations]=useState([])
  const [refresh,setRefresh]=useState(false)
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData=JSON.parse(localStorage.getItem("userData"))
if (!userData) {
  console.log("user not authenticated");
 navigate("/");
}

 
  const user=userData.data
  

 useEffect(()=>{
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  };
  
  axios.get('http://localhost:8080/chat/',config).then((response)=>{

     setConversations(response.data)
     
      
  })
 
 
})
 

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
      <div className={`sb-conversations ${themeClass}`}>
        {Conversations.map((conversation,index)=>{
          var chatName="";
          if (conversation.isGroupChat) {
            chatName=conversation.chatName;
          } else {
            conversation.users.map((user)=>{
              if (user._id != userData.data.id) {
                chatName=user.name;
              }
            }
          
          
              
          )
          }
          if (conversation.LatestMessage === undefined) {
            return(
              <div key={index} onClick={()=>{
                setRefresh(!refresh)
              }}>
                <div key={index} className='conversation-container' onClick={()=>{
                navigate("chat/"+ conversation._id + "&" + chatName);
              }}>
                <p  className={`con-icon ${themeClass}`}>{chatName[0]}</p>
                <p  className={`con-title ${themeClass}`}>{chatName}</p>
                <p  className={`con-LastMessage ${themeClass}`}>No message previous</p>
              </div>
              </div>
            )
          } else {
            return(
              <div key={index} onClick={()=>{
                setRefresh(!refresh)
              }}>
                <div key={index} className='conversation-container' onClick={()=>{
                navigate("chat/"+ conversation._id + "&" + chatName);
              }}>
                <p  className={`con-icon ${themeClass}`}>{chatName[0]}</p>
                <p  className={`con-title ${themeClass}`}>{chatName}</p>
                <p  className={`con-LastMessage ${themeClass}`}>{conversation.LatestMessage.content}</p>
              </div>
              </div>
            )
          }
        })}
      </div>
        
      {/* Conversations */}
     {/* <Conversations/> */}
    </div>
  );
}
