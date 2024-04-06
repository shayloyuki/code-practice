/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 16:44:23
 * @FilePath: \20-受控表单之单选框\src\App.js
 */

import React, {Component} from 'react'

class App extends Component{

  state = {
    sex: '女'
  }

  handler = (ev) => {
    this.setState({
      sex: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="radio" name="sex" value="女" defaultChecked={this.state.sex === '女'} onChange={this.handler} />女
        <input type="radio" name="sex" value="男" defaultChecked={this.state.sex === '男'} onChange={this.handler} />男
        <button onClick={() => {console.log(this.state.sex);}}>点击查看状态值</button>
      </div>
    )
  }
}

export default App
