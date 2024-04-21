/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 03:09:09
 * @FilePath: \29-redux工作流程梳理\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// 3. 定义初始的 store 数据
const initialState = {
  content: ['默认内容']
}

// 2. 创建 reducer
function reducer(state = initialState, action) {
  // state: reducer 处理完数据之后返回给 store 进行存储的数据
  // action: store 传递给 reducer 的具体指令
  // console.log({action});
  switch (action.type) {
    case 'addContent':
      return {
        content: [
          ...state.content,
          action.content
        ]
      }
    default: 
      return state
  }
}

// 1. 创建 store，存储数据
const store = createStore(reducer)
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

