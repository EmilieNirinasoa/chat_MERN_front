import React from 'react';
import { IconButton } from '@mui/material';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
export default function CreateGroup() {
  return (
    <div className='createGroups-container'>
     <input placeholder='Enter Group Name' className='search-box'/>
     <IconButton>
        <DoneOutlineRoundedIcon />
        </IconButton>
    </div>
  );
}
