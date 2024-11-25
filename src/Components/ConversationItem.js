import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function ConversationItem({name,lastMessage, timestamps}) {
  const navigate= useNavigate();
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';
  return (
    <div  className={`conversation-container ${themeClass}`} onClick={()=>{navigate('Chat')}}>
        <p  className={`con-icon ${themeClass}`}>{name[0]}</p>
        <p  className={`con-title ${themeClass}`}>{name}</p>
        <p  className={`con-LastMessage ${themeClass}`}>{lastMessage}</p>
        <p className={`con-TimesTamp ${themeClass}`}>{timestamps}</p>
   
    </div>
  );
}
