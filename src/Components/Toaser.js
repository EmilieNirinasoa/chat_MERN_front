import React, { useState } from 'react';
import { Alert,IconButton,Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

export default function Toaster({message}) {
    const [Open,setOpen]=useState(true);
    function handleClose(event,reason){
          if(reason=== "clickaway"){
            return;
          }
          setOpen(false)
    }
  return (
    <Snackbar
    anchorOrigin={
        {
            vertical:'top',
            horizontal:'right'
        }
    }
    open={Open}
    autoHideDuration={3000}
    onClose={handleClose}
    variant="warning"
    ContentProps={{
        "aria-describedby":"message-id"
    }}
    message={message}
    action={[
        <IconButton key="close" onClick={handleClose}>

             <CloseIcon/>
        </IconButton>
    ]}

    >
    <Alert onClose={handleClose} severity="warning" sx={{width:"30vh"}}>
        {message}
    </Alert>
    </Snackbar>
  );
}
