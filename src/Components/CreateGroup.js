import React from 'react';
import { IconButton } from '@mui/material';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { useSelector } from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion'
export default function CreateGroup() {
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';
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
    className={`createGroups-container ${themeClass}`}>
    
     <input placeholder='Enter Group Name'  className={`search-box ${themeClass}`}/>
     <IconButton>
        <DoneOutlineRoundedIcon className={` ${themeClass}`}/>
        </IconButton>
        </motion.div>
        </AnimatePresence>
  );
}
