import React from 'react';
import './myStyles.css';
import { Button, TextField } from '@mui/material';
export default function Login() {
  return (
    <div className='login-container'>
    <div className='image-container'>
    <img src='' alt='logo' className='welcome-logo'/>
    </div>
    <div className='login-box'>
    Login to your Account
    <TextField id="standard-basic" label="Enter User Name" variant="outlined" />
    <TextField id="standard-basic" label="Password" type='password' autoComplete='current-passord' variant="outlined"/>
    <Button variant='outlined'> Login</Button>
    </div>
    </div>
  );
}
