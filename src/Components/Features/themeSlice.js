import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: true, // true = light theme, false = dark theme
  reducers: {
    toggleTheme: (state) => !state,
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
