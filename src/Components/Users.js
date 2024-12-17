import React, { useEffect, useState } from 'react';
import './myStyles.css';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './images/env2.png';
import { myContext } from './MainContainer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toggleRefreshSidebar } from './Features/sidebarSlice';

export default function Users() {
  const [refresh, setRefresh] = useState(myContext);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData=JSON.parse(localStorage.getItem('userData'))
  const lightTheme = useSelector((state) => state.theme.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';

  if (!userData) {
    console.log("User not authenticated");
    navigate(-1);
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };

    axios
      .get('https://chat-server-m3ess7ows-emilienirinasoas-projects.vercel.app/user/fecthUsers', config)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, [refresh]);

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUserClick = (user) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };

    axios
      .post('http://localhost:8080/chat/', { userId: user._id }, config)
      .then(() => {
        dispatch(toggleRefreshSidebar());
      })
      .catch((error) => {
        console.error("Error while joining the chat!", error);
      });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: 0.3 }}
        className={`list-container ${themeClass}`}
      >
        <div className={`ug-header ${themeClass}`}>
          <img src={Logo} alt="logo" style={{ height: '2rem', width: '2rem', marginLeft: '10px' }} />
          <p className={`ug-title ${themeClass}`}>Users Online</p>
        </div>

        <div className={`sb-search ${themeClass}`}>
          <IconButton>
            <SearchIcon className={`${themeClass}`} />
          </IconButton>
          <input
            placeholder="Search"
            className={`search-box ${themeClass}`}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className={`ug-list ${themeClass}`}>
          {filteredUsers.map((user) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={`list-tem ${themeClass}`}
              key={user._id} // Unique key from the user ID
              onClick={() => handleUserClick(user)}
            >
              <div className={`con-icon ${themeClass}`}>{user.name[0]}</div>
              <div className={`con-title ${themeClass}`}>{user.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
