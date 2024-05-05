/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 17:40:48
 * @FilePath: \21-受控表单之复选框\src\App.js
 */

import React, {Component} from 'react'

class App extends Component{

  state = {
    name: 'lx',
    age: 28
  }

  // 模拟数据源
  hobbies = [
    {
      id: 1,
      title: 'vue',
      isChecked: true
    },
    {
      id: 2,
      title: 'react',
      isChecked: false
    },
    {
      id: 3,
      title: 'angular',
      isChecked: false
    },
  ]

  handler = (index, ev) => {
    // console.log(index, ev.target.checked);
    this.hobbies[index].isChecked = ev.target.checked
  }

  submit = (ev) => {
    ev.preventDefault()
    // 01 之前已经将数据与 hobbies 进行了绑定也可以同步更新
    // 02 当前想要实现的是：点击提交按钮可以拿到 [1, 2]
    let ret = this.hobbies
      .filter(hobby => hobby.isChecked)
      .map(hobby => hobby.id)
      // 将 state 的数据和修改后的数据id数组都返回给后端
      ret = {
        ...this.state, 
        ret
      }
      console.log(ret);
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        {this.hobbies.map((hobby, index) => {
          return (
            <label key={hobby.id}>
              {/* <input type="checkbox" defaultChecked={hobby.isChecked} onChange={(ev) => this.handler(index, ev)}/>{hobby.title} */}
              <input type="checkbox" defaultChecked={hobby.isChecked} onChange={this.handler.bind(this, index)}/>{hobby.title}
            </label>
          )
        })}
        <hr/>
        <button onClick={() => {console.log(this.hobbies);}}>点击查看数据源</button>
        <input type="submit"/>
      </form>
    )
  }
}

export default App
