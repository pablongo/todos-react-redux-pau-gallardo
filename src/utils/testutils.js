/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
// test-utils.jsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import todosReducer from '../redux/reducers/todosReducer';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: todosReducer, preloadedState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
