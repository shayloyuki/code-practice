/*
 * @Date: 2024-02-19 23:26:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-04 11:08:26
 * @FilePath: \04-JSX事件操作\src\App.js
 */

/* 
 * 一、事件绑定
 *  驼峰命名直接添加={事件监听的名称}
 * 
 * 二、事件监听传参
 *  a. 利用箭头函数内部调用事件监听的时候传递实参
 *  b. 利用 bind 方法返回一个新的函数在事件发生时调用，此时也可以传递参数
 * 
 * 三、获取事件对象
 *  - 默认情况下不需要接收参数，且直接执行事件监听，此时它的第一个参数默认是 ev
 *  - 利用箭头函数执行事件监听的时候，需要通过箭头函数将 ev 对象传递给事件监听函数使用
 *  - 利用 bind 方法执行时，如果有传参那么最后一个参数接收到的就是 ev
 * 
 */

// const handler = (a, b) => {
//   console.log('执行了:', a, b)
// }

const handler = (ev) => {
  console.log('执行了new:',ev)
}

function App() {
  return (
    <div>
      {/* <button onClick={() => {handler(1, 2)}}>点击触发事件</button> */}
      {/* <button onClick={handler.bind(null, 100, 200)}>点击触发事件</button> */}
      {/* <button onClick={handler}>点击触发事件</button> */}
      {/* <button onClick={(ev) => {handler(ev)}}>点击触发事件</button> */}
      {/* <button onClick={handler.bind(null, 10, 20)}>点击触发事件</button> */}
      <button onClick={handler.bind(null)}>点击触发事件</button>
    </div>

  )
}

export default App
