/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 20:52:47
 * @FilePath: \12-向组件传递JSX\src\App.js
 */
/**
 * 向组件传递 JSX：
 *   组件中通过 props.children 接收
 */

import About from './About'
import Header from './Header'

const obj = {
  name: 'Alice',
  age: 18
}

function App() {
  return(
    <div>
      <About>
      <p>About 中的 p 标签</p>
      </About>
      <Header>
        <p>Header 中的 p 标签</p>
        <span>Header 中的 span 标签</span>
      </Header>
    </div>
  )
}

export default App
