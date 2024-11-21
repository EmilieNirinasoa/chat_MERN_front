import React from 'react';
import   './myStyles.css';
import Sidebar from './Sidebar';
// import ChatArea from './ChatArea';
// import Welcome from './Welcome';
// import CreateGroup from './CreateGroup';
import UsersGroups from './Users_Groups';
export default function MainContainer() {
  // const props={name:'Test#1',TimesTamps:'12:00'}
  return (
    <div className='main-container'>
    
          <Sidebar/>
          <UsersGroups/>
          {/* <CreateGroup/> */}
          {/* <Welcome/> */}
          {/* <ChatArea props={props}/> */}
    </div>
  );
}
