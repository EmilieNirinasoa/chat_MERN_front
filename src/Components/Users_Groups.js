import React from 'react';
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
export default function UsersGroups() {
  return (
    <div className='list-container'>
    <div className='ug-header'>
    <img src='' alt='logo' style={{height:'2rem',width:'2rem',marginLeft:'10px'}}/>
    <p className='ug-title'> Users Onlines</p>
    </div>
    <div className='sb-search'>
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input placeholder='search' className='search-box'/>
    </div>
    <div className='ug-list'>
        <div className='list-tem'>
           <div className='con-icon'>T</div>
           <div className='con-title'>Test User</div>
       </div>
       <div className='list-tem'>
           <div className='con-icon'>T</div>
           <div className='con-title'>Test User</div>
       </div>
       <div className='list-tem'>
           <div className='con-icon'>T</div>
           <div className='con-title'>Test User</div>
       </div>
       <div className='list-tem'>
           <div className='con-icon'>T</div>
           <div className='con-title'>Test User</div>
       </div>
       <div className='list-tem'>
           <div className='con-icon'>T</div>
           <div className='con-title'>Test User</div>
       </div>
       <div className='list-tem'>
           <div className='con-icon'>T</div>
           <div className='con-title'>Test User</div>
       </div>
       <div className='list-tem'>
           <div className='con-icon'>T</div>
           <div className='con-title'>Test User</div>
       </div>
       <div className='list-tem'>
           <div className='con-icon'>T</div>
           <div className='con-title'>Test User</div>
       </div>
       <div className='list-tem'>
           <div className='con-icon'>T</div>
           <div className='con-title'>Test User</div>
       </div>
  
   
    </div>
    </div>
  );
}
