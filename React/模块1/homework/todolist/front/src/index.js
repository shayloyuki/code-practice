/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 18:23:26
 * @FilePath: \todolist\front\src\index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './store'
import './axios.config'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

