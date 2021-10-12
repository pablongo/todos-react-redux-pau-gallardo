import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createNewTodo } from '../../redux/actions/actionCreators';

export default function Search() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  function handleInputChange({ currentTarget }:React.FormEvent<HTMLInputElement>) {
    setInputValue(currentTarget.value);
  }

  function handleSubmit(todo:string) {
    dispatch(createNewTodo(todo));
  }

  function handleKeyStroke({ code }:any) {
    if (code === 'Enter' && inputValue) {
      handleSubmit(inputValue);
    }
  }

  return (
    <input
      data-testid="search-input"
      type="text"
      placeholder="What needs to be accomplished today?"
      onChange={handleInputChange}
      onKeyPress={handleKeyStroke}
    />
  );
}
