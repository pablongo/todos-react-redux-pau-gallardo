/* eslint-disable react/no-array-index-key */
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
      <ul data-testid="todos-container">
        {todos?.map((todo:Todo, index:number) => (
          <li key={`li-${index}`} onClick={() => handleTodoClick(index)} className={todo?.done ? 'done' : ''}>
            <span>
              {todo.text}
            </span>
            <button
              data-testid={`deleteButton-${index}`}
              type="button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        data-testid="clear-all"
        type="button"
        className="clearAll"
        onClick={handleClearAll}
      >
        Clear all
      </button>
    </>
  );
}
