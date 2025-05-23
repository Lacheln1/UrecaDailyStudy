import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodosData } from '@/api/todosApi';

// const todos = [
//   {
//     id: 1,
//     todosDesc: '할일 내용이 입력되는 곳',
//     createAt: '2025.04.24',
//     isDone: false,
//   },
//   {
//     id: 2,
//     todosDesc: '22222할일 내용이 입력되는 곳',
//     createAt: '2025.04.25',
//     isDone: false,
//   },
// ]
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await getTodosData();
  return res;
});
export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
        state.error = null;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
