/*
 * @Date: 2024-04-05 21:59:27
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 14:07:42
 * @FilePath: \15-setState 使用\src\Header.js
 */
/* 
 * 1 setState() 是异步函数
 *   - 可使用 async 和 await 解决异步执行问题
 *   - 传入回调函数
 * 2 setState() 除了可以传入对象，还可以传入函数
 * 
 * 3 setState() 传入对象和传入函数的不同点：
 *    - 传入多个对象：只会执行最后一次
 *    - 传入多个函数：都会执行
 *    因此，推荐使用传入函数。
*/

import React, {Component} from 'react'

class Header extends Component{
  state = {
    name: 'Alice',
    age: 30,
    count: 0
  }

  // handler = async () => {
  //   await this.setState({
  //     name: 'Lily'
  //   })
  //   console.log(this.state.name);
  // }

  // handler = () => {
  //   this.setState({
  //     name: 'Lily'
  //   }, () => {
  //     console.log(this.state.name);
  //   })
  // }

  handler = () => {

    // 传入多个函数都会执行，结果是 6
    // this.setState((state) => ({
    //   count: state.count + 1
    // }))
    // this.setState((state) => ({
    //   count: state.count + 5
    // }))

    // 传入多个对象，只会执行最后一次，结果是 5
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 5
    // })

    // 传入多个对象，只会执行最后一次，结果是 1
    this.setState({
      count: this.state.count + 5
    })
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <div>
          <span>{this.state.name}</span>
          <span>{this.state.age}</span>
        </div>
        <hr/>
        <span>{this.state.count}</span>
        <button onClick={this.handler}>点击</button>
      </>
    )
  }
}

export default Header