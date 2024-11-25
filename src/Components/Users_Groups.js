import React from 'react';
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion'
export default function UsersGroups() {
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
 className='list-container'>
 
 <div  className={`ug-header ${themeClass}`}>
 <img src='' alt='logo' style={{height:'2rem',width:'2rem',marginLeft:'10px'}}/>
 <p  className={`ug-title ${themeClass}`}> Avalaibles Groups</p>
 </div>
 <div   className={`sb-search ${themeClass}`}>
     <IconButton>
     <SearchIcon  className={` ${themeClass}`}/>
     </IconButton>
     <input placeholder='search'   className={`search-box ${themeClass}`}/>
 </div>
 <div className='ug-list'>
    <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}}  className={`list-tem ${themeClass}`}>
   
        <div   className={`con-icon ${themeClass}`}>T</div>
        <div   className={`con-title ${themeClass}`}>Test Groups</div>
    
    </motion.div>
   
    
  
   


 </div>
 </motion.div>
    </AnimatePresence>
   
  );
}
