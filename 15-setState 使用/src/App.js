/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 22:00:19
 * @FilePath: \14-组件状态\src\App.js
 */
/* 
 * 组件状态：状态就是数据，因此组件状态就是指某一个组件自己的数据
 * 数据驱动 DOM：当修改某个数据时，界面上的 DOM 中的数据展示也会自动更新
 * 组件状态管理
*/

import Header from './Header'

const obj ={
  name: 'lx',
  age: 28
}

function App() {
  return(
    <Header />
  )
}

export default App
