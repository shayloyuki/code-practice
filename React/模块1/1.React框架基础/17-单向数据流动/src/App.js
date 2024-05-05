/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 15:13:35
 * @FilePath: \17-单向数据流动\src\App.js
 */
/* 
 * 01 何为单向数据流动
 *   单向数据流动的设计原则：要求将不同组件之间需要共享的数据都定义在上层
 * 
 * 02 单项数据流动如何修改
 * 
 * 03 特点
 *   - 单向数据流动，从上到下，从父组件传到子组件
 *   - 基于单向数据流动，要求将共享数据定义在上层组件
 *   - 子组件通过调用和父组件传来的方法可以更改数据
 *   - 当数据发生更改后，React 会重新渲染组件树
*/
import React, {Component} from 'react'
import C1 from './C1'

class App extends Component {
  // 在类组件中可以使用 state 定义状态
  state = {
    name: 'lx',
    age: 28
  }

  // 定义状态的更新方法，当前组件只负责定义，在想要修改数据的地方会调用

  // setState 传入对象
  // handler = ({name, age}) => {
  //   this.setState({
  //     name,
  //     age
  //   })
  // }

   // setState 传入函数
  handler = ({name, age}) => {
    this.setState(() => ({
      name,
      age
    }))
  }

  render() {
    return (
      <div>
        单向数据流
      <C1 {...this.state} change={this.handler}/>
    </div>
    )
  }
}

export default App
