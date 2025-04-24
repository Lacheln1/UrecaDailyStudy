import { createSlice } from '@reduxjs/toolkit';

const savedTheme = localStorage.getItem('theme');
const isDarkMode = savedTheme !== null ? JSON.parse(savedTheme) : false;

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    //이 정보는 localStorage에서 가져와야 함
    isDarkMode: false,
  },
  reducers: {
    toggleTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
