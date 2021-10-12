/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, clearAll, updateTodo } from '../../redux/actions/actionCreators';

import { Todo, Props } from '../../types/interface';

export default function TodoList({ todos }:Props) {
  const dispatch = useDispatch();

  function handleDelete(index:number) {
    dispatch(deleteTodo(index));
  }

  function handleClearAll() {
    dispatch(clearAll());
  }

  function handleTodoClick(index:number) {
    dispatch(updateTodo(index));
  }

  return (
    <>
      <ul>
        {todos?.map((todo:Todo, index:number) => (
          <li onClick={() => handleTodoClick(index)} className={todo?.done ? 'done' : ''}>
            <span>
              {todo.text}
            </span>
            <button
              type="button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="clearAll"
        onClick={handleClearAll}
      >
        Clear all
      </button>
    </>
  );
}
