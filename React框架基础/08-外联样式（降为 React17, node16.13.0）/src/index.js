/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 16:56:53
 * @FilePath: \08-外联样式（降为 React17, node16.13.0）\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Test from './Test'
import "./style.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

