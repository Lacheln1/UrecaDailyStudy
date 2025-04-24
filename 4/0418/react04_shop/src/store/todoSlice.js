import { createSlice } from '@reduxjs/toolkit';

const todos = [
  {
    id: 1,
    todosDes: '할일 내용이 입력되는 곳',
    createAt: 'yyyy-mm-dd',
    isDone: false,
  },
  {
    id: 2,
    todosDes: '할일 내용이 입력되는 곳2',
    createAt: 'yyyy-mm-dd2',
    isDone: false,
  },
  {
    id: 3,
    todosDes: '할일 내용이 입력되는 곳3',
    createAt: 'yyyy-mm-dd3',
    isDone: false,
  },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos,
  },
});
