import React from 'react';
import { useSelector } from 'react-redux';
import ConversationItem from './ConversationItem';

const Conversations = () => {
  // Obtenir le thème depuis le store Redux
  const lightTheme = useSelector((state) => state.themeKey);
  const themeClass = lightTheme ? 'light' : 'dark';

  // Données des conversations
  const conversations = [
    { name: 'Test#1', lastMessage: 'Last Message #1', timestamps: 'Today' },
    { name: 'Test#2', lastMessage: 'Last Message #2', timestamps: 'Today' },
    { name: 'Test#3', lastMessage: 'Last Message #3', timestamps: 'Today' },
  ];

  return (
    <div className={`sb-conversation ${themeClass}`}>
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.name}
          name={conversation.name}
          lastMessage={conversation.lastMessage}
          timestamps={conversation.timestamps}
        />
      ))}
    </div>
  );
};

export default Conversations;
