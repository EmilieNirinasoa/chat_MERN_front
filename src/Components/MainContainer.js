import React from 'react';
import './myStyles.css';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function MainContainer() {
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';
  return (
    <div className={`main-container ${themeClass}`}>
       <Sidebar />
       <Outlet />
    </div>
  );
}
