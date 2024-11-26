import React, { useState } from 'react';
import './myStyles.css';
import {useNavigate} from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import Toaster from './Toaser';
import Logo from './images/env2.png'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux';
export default function Login() {
const lightTheme = useSelector((state) => state.themeKey);
const themeClass = lightTheme ? 'light' : 'dark';
const [showLogin,setShowLogin]=useState(false)
const [data,setData]=useState({name:"",email:"",password:""})
const [loading,setLoading]=useState(false);
const [loginStatus,setLoginStatus]=useState("");
const [signInStatus,setSigninStatus]=useState("");
const navigate= useNavigate();

const ChangeHandler=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
  const LoginHandler= async(e)=>{
      setLoading(true)
      console.log(data)
      try {
        const config={
          headers:{
            "content-type":"application/json"
          }  
        }
        const response= await axios.post('http://localhost:8080/user/login',data,config);
        console.log("login",response)
        setLoginStatus({msg:"success",key:Math.random()})
        setLoading(false)
        localStorage.setItem("userData",JSON.stringify(response))
        navigate("app/welcome")
      } catch (error) {
        setLoginStatus({
          msg:"Invalid UserName or Password",
          key:Math.random()})
          setLoading(false)
      }

  }

  const SignupHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:8080/user/register",
        data,
        config
      );
      console.log("login", response);
      setLoginStatus({ msg: "success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response.data));
      navigate("/app/welcome");
    } catch (error) {
      console.log(error);
      if (error.response) {
        // Vérifie si error.response existe
        if (error.response.status === 405) {
          setLoginStatus({
            msg: "User with this email ID already exists",
            key: Math.random(),
          });
        } else if (error.response.status === 406) {
          setLoginStatus({
            msg: "User Name already taken, please choose another one",
            key: Math.random(),
          });
        }
      } else {
        // Gestion des erreurs sans réponse (par exemple, problème réseau)
        setLoginStatus({
          msg: "Network error or server unreachable. Please try again later.",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };
  
  return (
    <div className='login-container'>
    <div className='image-container'>
    <motion.img drag whileTap={{scale:1.05,rotate:360}} src={Logo} alt='logo' className={`welcome-logo ${themeClass}`}/>
    </div>
   {loginStatus ? (<Toaster key={loginStatus.key} message={loginStatus.msg}/>):(null)}
    {!showLogin ? (
       <div className='login-box'>
        <h2 className='login-text'> Create Your Account</h2>
     
      <TextField id="standard-basic" label="Enter User Name" variant="outlined" onChange={ChangeHandler} name='name' color='secondary'/>
      <TextField id="standard-basic" label="Enter Email Address" type='email' autoComplete='current-passord' variant="outlined" onChange={ChangeHandler} name='email' color='secondary'/>
      <TextField id="standard-basic" label="Password" type='password' autoComplete='current-passord' variant="outlined" onChange={ChangeHandler} name='password' color='secondary'/>
      <Button variant='outlined' onClick={SignupHandler} color='#2d3941'> sign Up</Button>
      <p >Already have Account?<span className='hyper' onClick={()=>{setShowLogin(true)}}>Login </span></p>
      </div>
    ):(
      <div className='login-box'>
 <h2 className='login-text'> Login to your Account</h2>
      
     <TextField id="standard-basic" label="Enter User Name" variant="outlined" onChange={ChangeHandler} name='name' color='secondary'/>
     <TextField id="standard-basic" label="Password" type='password' autoComplete='current-passord' variant="outlined" onChange={ChangeHandler} name='password' color='secondary'/>
     <Button variant='outlined' onClick={LoginHandler}> Login</Button>
     </div>
    )}
   
    
   
    </div>
  );
}
