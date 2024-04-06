/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 16:17:54
 * @FilePath: \18-受控表单值绑定与更新\src\App.js
 */
/* 
 * 一、如何在 react 中使用表单元素
 *  受控表单
 *    表单元素的值全部由 react 管理，都放在 state 中，所以也需要从 state 中获取
 *  非受控表单
 *    不受 react 管理，表单元素的数据由 DOM 元素管理，都存放在 DOM 元素里，获取时需要操作 DOM 元素
 * 
 * 二、受控表单值绑定与数据同步
 *  01 将 state 中的状态与表单的 value 值进行绑定 value={this.state.xxx}
 *  02 如何更新状态值 onChange={方法} ev.target.value
 *  03 ev.target.name === [props]: this.setState({})
 * 
 * 三、细节
 *  01 readOnly
 *  02 defaultValue
*/

import React, {Component} from 'react'

class App extends Component{
  state = {
    name: 'lx',
    age: 28,
    test: 1
  }

  // handler = (ev) => {
  //   this.setState({
  //     name: ev.target.value
  //   })
  // }

  handler = (ev) => {
    // 获取到 input 的 name 属性
    const prop = ev.target.name
    console.log({prop});
    this.setState({
      [prop]: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <input name="name" value={this.state.name} onChange={this.handler}/>
        {/* <input value={this.state.name} onChange={(ev) => {this.setState({name: ev.target.name})}}/> */}
        <input name="age" value={this.state.age} onChange={this.handler}/>

        {/* 只读的两种展示方式： */}
        {/* <input value={this.state.test} readOnly/> */}
        <input defaultValue={this.state.test} />
      </div>
    )
  }
}

export default App
