import React, { useEffect, useState } from 'react';
import { IconButton, Skeleton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ENDPOINT = "http://localhost:8080";
var socket;

export default function ChatArea() {
  const dyParams = useParams();
  const [allMessages, setAllMessages] = useState([]);
  const [messageContent, setMessageContent] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const { _id: chat_id, name: chat_user } = dyParams;
  const userData = JSON.parse(localStorage.getItem('userData'));
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';

  useEffect(() => {
    if (userData) {
      const config = {
        Authorization: `Bearer ${userData.data.token}`,
      };

      axios
        .get(`${ENDPOINT}/message/${chat_id}`, config)
        .then(({ data }) => {
          setAllMessages(data);
          setLoaded(true);

          socket.emit('join chat', chat_id);
        })
        .catch((error) => console.error('Error fetching messages:', error));
    }
  }, [refresh, chat_id, userData?.data.token]);

  const sendMessage = () => {
    if (messageContent.trim() === '') return;

    const config = {
      Authorization: `Bearer ${userData.data.token}`,
    };

    axios
      .post(
        `${ENDPOINT}/message`,
        { content: messageContent, chatId: chat_id },
        config
      )
      .then(() => {
        setMessageContent('');
        setRefresh(!refresh); // Trigger re-fetch of messages
      })
      .catch((error) => console.error('Error sending message:', error));
  };

  if (!loaded) {
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Skeleton variant="rectangular" sx={{ width: '100%', borderRadius: '10px' }} height={60} />
        <Skeleton variant="rectangular" sx={{ width: '100%', borderRadius: '10px', flexGrow: 1 }} height={60} />
        <Skeleton variant="rectangular" sx={{ width: '100%', borderRadius: '10px' }} height={60} />
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: 'anticipate', duration: 0.3 }}
        className={`ChatArea-Container ${themeClass}`}
      >
        <div className={`ChatArea-header ${themeClass}`}>
          <p className={`con-icon ${themeClass}`}>{chat_user[0]}</p>
          <div className={`header-text ${themeClass}`}>
            <p className={`con-title ${themeClass}`}>{chat_user}</p>
          </div>
          <IconButton>
            <DeleteIcon className={`${themeClass}`} />
          </IconButton>
        </div>

        <div className={`messages-container ${themeClass}`}>
          {allMessages
            .slice(0)
            .reverse()
            .map((message, index) => {
              const sender = message.sender;
              const self_id = userData.data._id;

              return sender._id === self_id ? (
                <MessageSelf props={message} key={index} />
              ) : (
                <MessageOthers props={message} key={index} />
              );
            })}
        </div>

        <div className={`text-input-area ${themeClass}`}>
          <input
            placeholder="Tape a Message"
            className={`search-box ${themeClass}`}
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            onKeyDown={(event) => {
              if (event.code === 'Enter') {
                sendMessage();
              }
            }}
          />
          <IconButton onClick={sendMessage}>
            <SendIcon className={`${themeClass}`} />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
