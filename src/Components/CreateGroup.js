import React from 'react';
import { IconButton } from '@mui/material';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { useSelector } from 'react-redux';
export default function CreateGroup() {
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';
  return (
    <div  className={`createGroups-container ${themeClass}`}>
     <input placeholder='Enter Group Name'  className={`search-box ${themeClass}`}/>
     <IconButton>
        <DoneOutlineRoundedIcon className={` ${themeClass}`}/>
        </IconButton>
    </div>
  );
}
