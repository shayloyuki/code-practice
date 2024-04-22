/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 22:18:54
 * @FilePath: \29-redux使用代码优化\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import totalReducer from './store/Reducers'

const store = createStore(totalReducer)
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

