import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isLightTheme: true, // true = light theme, false = dark theme
    refreshSidebar: false, // Indique si la sidebar doit être actualisée
  },
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
    refreshSidebarFun: (state) => {
      state.refreshSidebar = !state.refreshSidebar; // Toggle la valeur pour forcer l'actualisation
    },
  },
});

export const { toggleTheme, refreshSidebarFun } = themeSlice.actions;
export default themeSlice.reducer;
