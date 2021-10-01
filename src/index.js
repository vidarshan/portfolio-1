import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}from 'react-redux';
import './index.scss';
import store from './store.js'
import App from './App';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
