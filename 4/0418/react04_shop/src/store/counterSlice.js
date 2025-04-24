import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    label: '카운터',
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
