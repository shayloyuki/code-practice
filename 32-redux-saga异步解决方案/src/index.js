/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 11:03:00
 * @FilePath: \32-redux-saga异步解决方案\src\index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import totalReducer from './store/Reducers'
import createSagaMiddleware from 'redux-saga'
import personSaga from './store/Saga/person.saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(totalReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(personSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

