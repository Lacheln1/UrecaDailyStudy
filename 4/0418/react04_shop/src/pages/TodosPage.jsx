import TodoInput from '@/components/TodoInput';
import TodoSearch from '@/components/TodoSearch';
import TodosList from '@/components/TodosList';
import React from 'react';

const TodosPage = () => {
  return (
    <div>
      todoList
      <TodoSearch />
      <TodoInput />
      <TodosList />
    </div>
  );
};

export default TodosPage;
