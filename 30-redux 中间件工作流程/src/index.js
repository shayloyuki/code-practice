/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 07:54:17
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

// 当前定义一个中间件函数
function middle({getState, dispatch}) {
  return function(next) {
    return function(action) {
      // 此处就可以完成自己的异步操作
      setTimeout(() =>{
        // 此处如果需要操作数据，然后往后传递，就可以通过属性交给 action
        action.payload = 100
        // 在此处异步操作执行完毕后，还是需要将 action 交给 store 继续往后传递
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

