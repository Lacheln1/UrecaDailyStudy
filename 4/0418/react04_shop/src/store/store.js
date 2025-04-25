import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';
import { themeSlice } from './themeSlice';
import { todosSlice } from './todoSlice';

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
    todos: todosSlice.reducer,
  },
});
