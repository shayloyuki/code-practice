/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 22:59:23
 * @FilePath: \30-redux 中间件工作流程\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

function reducer(state, action) {
  console.log({action});
  return state
}

function middle({getState, dispatch}) {
  return function(next) {
    return function(action) {
      setTimeout(() =>{
        console.log('qqq');
        action.payload = 100
        return next(action)
      }, 1500)
    }
  }
}

const store = createStore(reducer, applyMiddleware(middle))

store.dispatch({type: 'test'})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

