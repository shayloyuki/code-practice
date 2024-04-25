/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 01:02:25
 * @FilePath: \28-reducer拆分与合并\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from 'redux'
import totalReducer from './Store/Reducer'
import {Provider} from 'react-redux'

const store = createStore(totalReducer)
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

