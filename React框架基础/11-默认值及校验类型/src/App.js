/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 20:13:44
 * @FilePath: \11-默认值及校验类型\src\App.js
 */
/**
 * 01 对于函数组件：想要设置默认的 props 属性值，则通过 组件名称.defaultProps 设置对象
 * 02 对于类组件：直接定义 static defaultProps 来设置对象
 * 
 * 默认值校验，第三方包 prop-types，注意首字母的大小写区分
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
      <About />
      <Header />
    </div>
  )
}

export default App
