import React from 'react';
import   './myStyles.css';
import Sidebar from './Sidebar';
import Workarea from './Workarea';
export default function MainContainer() {
  return (
    <div className='main-container'>
          <Sidebar/>
          <Workarea/>
    </div>
  );
}
