/*
 * @Date: 2024-02-19 23:26:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 13:08:34
 * @FilePath: \06-内联样式\src\index.js
 */
/* React18 写法：使用 Radium 不生效 */
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// // 引入 StyleRoot 包裹 App 以实现媒体查询
// import { StyleRoot } from 'radium'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <StyleRoot>
//     <App />
//     </StyleRoot>
//   </React.StrictMode>
// );

/* React17 写法 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入 StyleRoot 包裹 App 以实现媒体查询
import { StyleRoot } from 'radium'

ReactDOM.render(
  <React.StrictMode>
    <StyleRoot>
      <App />
    </StyleRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
