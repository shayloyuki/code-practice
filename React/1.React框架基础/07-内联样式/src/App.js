/*
 * @Date: 2024-02-19 23:26:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 13:15:48
 * @FilePath: \06-内联样式\src\App.js
 */

/* 
 * 一、内联样式
 * 1 设置样式是应该将键值对放于花括号中 {}
 * 2 内联样式默认无法支持伪类和媒体查询，除非借助第三方包 radium
 * 3 radium
 *  a 导入 Radium 函数将当前需要支持伪类操作的组件包裹后再导出
 *
 * 二、外联样式
 * 
 */

import Radium from 'radium'

const styleObj = {
  width: 100,
  height: 200,
  backgroundColor: 'pink',
  ":hover": {backgroundColor: 'skyblue'},
  "@media (max-width: 1000px)": {width: 300}
}

const btnStyle = {
  base: {
    width: 150,
    height: 40,
    fontSize: 20,
    background: "#fff"
  },
  login: {
    background: "green"
  },
  logout: {
    background: "orange"
  }
}

const isLogin = false

function App() {
  return (
  //   <div style={{width: "100px"}}>样式设置</div>
  // <div style={styleObj}>样式设置</div>
  <div>
    <button style={[
      btnStyle.base,
      isLogin ? btnStyle.login : btnStyle.logout
    ]}>按钮</button>
  </div>
  )
}

export default Radium(App)

