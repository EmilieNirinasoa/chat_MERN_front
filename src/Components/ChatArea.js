import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion'
export default function ChatArea() {
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';
  const props={
    name:'Emilie',
    TimesTamps:'12:00'
  }
  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0,scale:0}} 
    animate ={{opacity:1,scale:1}} 
    exit={{opacity:0,scale:0}}
    transition={{
       ease:"anticipate",
       duration:'0.3'
    }}
    className={`ChatArea-Container ${themeClass}`}>
    
   
         <div  className={`ChatArea-header ${themeClass}`}>
         <p  className={`con-icon ${themeClass}`}>{props.name[0]}</p>
        
        <div   className={`header-text ${themeClass}`}>
        <p  className={`con-title ${themeClass}`}>{props.name}</p>
        <p   className={`con-TimesTamp ${themeClass}`}>{props.TimesTamps}</p>
        </div>
        <IconButton>
        <DeleteIcon  className={` ${themeClass}`}/>
        </IconButton>
   
    </div>
    <div   className={`messages-container ${themeClass}`}>
    <MessageOthers />
    <MessageSelf />
    <MessageOthers />
    <MessageSelf />
    <MessageOthers />
    <MessageSelf />
    <MessageOthers />
    <MessageSelf />
    
    </div>
    <div className={`text-input-area ${themeClass}`}>
    <input placeholder='Tape a Message'  className={`search-box ${themeClass}`}/>
    <IconButton>
        <SendIcon className={` ${themeClass}`}/>
        </IconButton>
    </div>
    </motion.div>
    </AnimatePresence>
  );
}
