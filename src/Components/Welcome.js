import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {AnimatePresence, motion} from 'framer-motion'
import Logo from './images/env2.png'
const Welcome = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';
  const userData=JSON.parse(localStorage.getItem("userData"))
  console.log(userData)
  const navigate= useNavigate()
  if (!userData) {
    navigate("/")
  } else {
    
  }
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
    className={`welcome-container ${themeClass}`}>
    
      <motion.img drag whileTap={{scale:1.05,rotate:360}} src={Logo} alt='logo' className={`welcome-logo ${themeClass}`}/>
      <b>Hi,{!userData.data?(userData.user.name):(userData.data.name)}</b>
      <p> view and text please</p>
      </motion.div>
    </AnimatePresence>
  )
}

export default Welcome
