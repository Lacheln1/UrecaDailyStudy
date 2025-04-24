import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    //이 정보는 localStorage에서 가져와야 함
    isDarkMode: false,
  },
});
