import React from 'react';
import { useSelector } from 'react-redux';

import Search from '../../components/Search/Search';
import TodoList from '../../components/TodoList/TodoList';

import { Props } from '../../types/interface';

export default function Dashboard() {
  const todosList = useSelector(({ todos }:Props) => todos);

  return (
    <main>
      <h1>WEVENTURE Coding Challenge</h1>
      <Search />
      <TodoList todos={todosList} />
    </main>
  );
}
