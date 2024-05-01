/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-01 15:27:38
 * @FilePath: \3.React Hooks\src\index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter><App /></HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

