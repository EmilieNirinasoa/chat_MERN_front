import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import sidebarReducer from './refreshSidebarFun';

export const store = configureStore({
  reducer: {
    theme: themeReducer,      // Gestion des thèmes
    sidebar: sidebarReducer,  // Gestion de la sidebar
  },
});

export default store;
