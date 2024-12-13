import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    refreshSidebar: false, // Indique si la sidebar doit être actualisée
  },
  reducers: {
    toggleRefreshSidebar: (state) => {
      state.refreshSidebar = !state.refreshSidebar; // Alterne l'état
    },
  },
});

export const { toggleRefreshSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
