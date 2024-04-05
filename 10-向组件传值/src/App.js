/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 18:09:55
 * @FilePath: \10-向组件传值\src\App.js
 */
/**
 * 01 在组件身上添加属性然后传递数据
 * 02 将数据统一管理，然后利用 ... 操作直接传递给相应的组件
 * 
 * a 函数组件：在函数组件内可以接收到外部的数据，内部直接访问即可 {name: xxx, age: xxx}
 * b 类组件：在类组件的内部存在 props 属性，外部传递的数据都在这里保存，可直接使用
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
      {/* <About a={10} b={100} /> */}
      <About {...obj} />
      {/* <Header name={"lx"} age={"28"} /> */}
      <Header {...obj} />
    </div>
  )
}

export default App
