import React from 'react';
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
export default function Users() {
    const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';
  return (
    <div  className={`list-container ${themeClass}`}>
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
    </div>
  );
}
