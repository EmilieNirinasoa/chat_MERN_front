import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { themeKey: true }, // true = light, false = dark
  reducers: {
    toggleTheme: (state) => {
      state.themeKey = !state.themeKey; // Alterne entre thème clair et sombre
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
