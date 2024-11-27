import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { useSelector } from 'react-redux';

import {AnimatePresence, motion} from 'framer-motion'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function CreateGroup() {
  const userData=JSON.parse(localStorage.getItem("userData"))
  const navigate=useNavigate();
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';
  const [groupName,setGroupName]=useState(true)
  const [Open,setOpen]=useState(true)
  const handleclose=()=>{
    setOpen(false);
  };
  const createGroup=()=>{
    const config= {
      Authorization: `Bearer ${!userData.data?(userData.user.token):(userData.data.token)}`
  }
  axios.post('http://8080/chat/createGroup',{
    name:groupName,
    users:'["647d699e4c3",647d999e4c3"]'
  },config)
  navigate("/app/groups")
  };

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
