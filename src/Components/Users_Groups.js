import React, { useEffect, useState } from 'react';
import './myStyles.css';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from './images/env2.png';
import {refreshSidebarFun} from './Features/refreshSidebarFun';

export default function UsersGroups() {
  const [groups, setGroups] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData=JSON.parse(localStorage.getItem('userData'))
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (!userData) {
      console.log("User not authenticated");
      navigate(-1); // Redirect to the previous page or login
    }
  }, [navigate, userData]);

  // Fetch groups after authentication
  useEffect(() => {
    if (userData) {
      const token = userData.data ? userData.data.token : userData.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get('http://localhost:8080/chat/fetchGroups', config)
        .then((response) => {
          setGroups(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            console.log("Unauthorized access - possibly invalid or expired token");
            // Handle logout if token is invalid or expired
            localStorage.removeItem("userData");
            navigate('/login');
          } else {
            console.error("Error fetching groups:", error);
          }
        });
    }
  }, [userData, navigate]);

  // Handle adding the user to a group
  const handleAddToGroup = (groupId) => {
    if (!userData) return;

    const token = userData.data ? userData.data.token : userData.user.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put(
        'http://localhost:8080/chat/addSelfToGroup',
        { chatId: groupId, userId: userData.data._id },
        config
      )
      .then(() => {
        dispatch(refreshSidebarFun()); // Refresh the sidebar after adding to the group
      })
      .catch((error) => {
        console.error("Error adding to group:", error);
      });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: '0.3',
        }}
        className="list-container"
      >
        <div className={`ug-header ${themeClass}`}>
          <img
            src={Logo}
            alt="logo"
            style={{ height: '2rem', width: '2rem', marginLeft: '10px' }}
          />
          <p className={`ug-title ${themeClass}`}>Available Groups</p>
        </div>
        <div className={`sb-search ${themeClass}`}>
          <IconButton>
            <SearchIcon className={` ${themeClass}`} />
          </IconButton>
          <input
            placeholder="Search"
            className={`search-box ${themeClass}`}
          />
        </div>
        <div className="ug-list">
          {groups.map((group) => (
            <motion.div
              key={group._id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={`list-item ${themeClass}`}
              onClick={() => handleAddToGroup(group._id)}
            >
              <div className={`con-icon ${themeClass}`}>T</div>
              <div className={`con-title ${themeClass}`}>Test Group</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
