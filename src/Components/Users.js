import React, { useEffect, useState } from 'react';
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion'
import axios from 'axios';
export default function Users() {
    const [Users,setUsers]=useState([])
    const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';

  useEffect(()=>{
    const config= {
        Authorization: `Bearer ${!userData.data?(userData.user.token):(userData.data.token)}`
    }
    axios.get('http://8080/user/fecthUsers',config).then(data)
    setUsers(data.data)
    console.log("data",data)
  },[refresh])
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
    className={`list-container ${themeClass}`}>
    
    <div  className={`ug-header ${themeClass}`}>
    <img src='' alt='logo' style={{height:'2rem',width:'2rem',marginLeft:'10px'}}/>
    <p  className={`ug-title ${themeClass}`}> Users Onlines</p>
    </div>
    <div   className={`sb-search ${themeClass}`}>
        <IconButton>
        <SearchIcon  className={` ${themeClass}`}/>
        </IconButton>
        <input placeholder='search'   className={`search-box ${themeClass}`}/>
    </div>
    <div   className={`ug-list ${themeClass}`}>
        <div   className={`list-tem ${themeClass}`}>
           <div   className={`con-icon ${themeClass}`}>T</div>
           <div   className={`con-title ${themeClass}`}>Test User</div>
       </div>
       <div   className={`list-tem ${themeClass}`}>
           <div   className={`con-icon ${themeClass}`}>T</div>
           <div   className={`con-title ${themeClass}`}>Test User</div>
       </div>
       <div   className={`list-tem ${themeClass}`}>
           <div   className={`con-icon ${themeClass}`}>T</div>
           <div   className={`con-title ${themeClass}`}>Test User</div>
       </div>
       <div   className={`list-tem ${themeClass}`}>
           <div   className={`con-icon ${themeClass}`}>T</div>
           <div   className={`con-title ${themeClass}`}>Test User</div>
       </div>
       <div   className={`list-tem ${themeClass}`}>
           <div   className={`con-icon ${themeClass}`}>T</div>
           <div   className={`con-title ${themeClass}`}>Test User</div>
       </div>
       <div   className={`list-tem ${themeClass}`}>
           <div   className={`con-icon ${themeClass}`}>T</div>
           <div   className={`con-title ${themeClass}`}>Test User</div>
       </div>
       <div   className={`list-tem ${themeClass}`}>
           <div   className={`con-icon ${themeClass}`}>T</div>
           <div   className={`con-title ${themeClass}`}>Test User</div>
       </div>
       <div   className={`list-tem ${themeClass}`}>
           <div   className={`con-icon ${themeClass}`}>T</div>
           <div   className={`con-title ${themeClass}`}>Test User</div>
       </div>
       <div   className={`list-tem ${themeClass}`}>
           <div   className={`con-icon ${themeClass}`}>T</div>
           <div   className={`con-title ${themeClass}`}>Test User</div>
       </div>  
      
       
      
  
   
    </div>
    </motion.div>
    </AnimatePresence>
  );
}
