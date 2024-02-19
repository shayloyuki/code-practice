/*
 * @Date: 2024-02-19 23:26:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-02-20 07:50:10
 * @FilePath: \code-practice\03-JSX\src\App.js
 */

/* 
 * 01 JSX 可以看作是 JS 语言的扩展，它既不是一个字符串也不是一个 HTML
 * 02 它具备了 JS 所有的功能，同时还可以被转为 HTML 在界面上展示（react react-dom）
 *
 * - 动态显示数据 {}
 * - 调用方法：自定义 + 内置
 * - 支持表达式，支持三元表达式
 * - 模板字符串
 * - 注释：要包裹
 * - 对象：JSON.striginfy() 展示
 *
 */

const name = 'shayloyuki'

function sayHello() {
  return 'Hello'
}

const obj = {
  name: 'shay',
  age: 28
}

function App() {
  return (
    <div>
      <p>{name}</p>
      <p>name</p>
      <p>{sayHello()}</p>
      <p>{/* 注释内容 */}</p>
      <p>{JSON.stringify(obj)}</p>
    </div>
  )
}

export default App
