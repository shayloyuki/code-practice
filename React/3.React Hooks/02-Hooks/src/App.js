/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 18:18:49
 * @FilePath: \02-Hooks\src\App.js
 */
/* 
 * 1 什么是 Hook
 *   它就是一个特殊的函数，可以让函数式也具有类组件的特性
 *
 * 2 为什么需要 Hook
 *   01 学习成本（相对）
 *   02 数据共享
 *   03 多个业务逻辑代码有可能会存在于同一个生命周期函数中
 * 
 * 3 useState
 *   它是一个可以在函数式组件中保存状态的 Hook 函数
 *   参数：保存状态的初始值
 *   返回值：一个数组
 *     01 第一个元素：当前保存的状态
 *     02 第二个元素：修改当前保存状态的方法
*/

import React, {useState} from "react";

function App() {
  const arr = useState(0)
  console.log(arr);
  const [state, setState] = arr
  console.log(state, setState);

  return (
    <div>
      数据：{state}
      <button onClick={() => setState(state + 1)}>+1</button>
      <button onClick={() => setState(state - 1)}>-1</button>
    </div>
  )
}

export default App
