import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    label: '카운터',
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload || 1;
    },

    decrement: state => {
      state.count -= 1;
    },
    countReset: state => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, countReset } = counterSlice.actions;
