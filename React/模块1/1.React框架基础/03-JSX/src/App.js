/*
 * @Date: 2024-02-19 23:26:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-02-20 08:04:21
 * @FilePath: \code-practice\03-JSX\src\App.js
 */

/* 
 * 01 JSX 本身就是一个表达式
 *
 * 02 JSX 添加属性
 *   字符串属性：直接用双引号包裹
 *   动态属性：用花括号包裹
 * 
 * 03 JSX 添加子元素
 * 
 * 04 JSX 只能用一个父元素
 * 
 * 05 使用单标签时必须正确关闭
 *
 */
const name = <div>shayloyuki</div>
const age = 28

function App() {
  return (
    <div>
      {name}
      <p title="自定义标题">添加属性</p>
      <p title={age}>添加动态属性</p>
      <img />
    </div>

  )
}

export default App
