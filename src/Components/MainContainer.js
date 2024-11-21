import React from 'react';
import   './myStyles.css';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
export default function MainContainer() {
  const props={name:'Test#1',TimesTamps:'12:00'}
  return (
    <div className='main-container'>
    
          <Sidebar/>
          <ChatArea props={props}/>
    </div>
  );
}
