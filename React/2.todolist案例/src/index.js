/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 01:18:42
 * @FilePath: \2.todolist案例\src\index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import store from './store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

