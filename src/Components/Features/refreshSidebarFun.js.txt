import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    refreshSidebar: false, // Indique si la sidebar doit être actualisée
  },
  reducers: {
    refreshSidebarFun: (state) => {
      state.refreshSidebar = !state.refreshSidebar; // Alterne pour forcer un rafraîchissement
    },
  },
});

export const { refreshSidebarFun } = sidebarSlice.actions;
export default sidebarSlice.reducer;
