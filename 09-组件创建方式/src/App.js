/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 17:37:08
 * @FilePath: \09-组件创建方式\src\App.js
 */
/**
 * 一、创建函数组件
 * 
 * 二、创建类组件
 *  01 必须继承 Component，使用 render() 方法
 *  02 组件名称首字母必须大写，在 React 中可用于区分组件和普通标记
 *  03 使用语法糖去除根元素
 */

import About from './About'

function App() {
  return(
    <div>
      <About />
    </div>
  )
}

export default App
