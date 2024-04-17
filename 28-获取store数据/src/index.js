/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 21:08:36
 * @FilePath: \28-获取store数据\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from 'redux'
import CounterReducer from './Store/Reducer/Counter.reducer'
import {Provider} from 'react-redux'

const store = createStore(CounterReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

