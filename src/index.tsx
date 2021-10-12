import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import Dashboard from './pages/Dashboard/Dashboard';

import preloadedStateMock from './mocks/preloadedState.mock';
import configureStore from './redux/stores';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(preloadedStateMock)}>
      <Dashboard />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
