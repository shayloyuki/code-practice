/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 16:33:17
 * @FilePath: \19-受控表单之下拉菜单\src\App.js
 */

import React, {Component} from 'react'

class App extends Component{

  state = {
    country: 'Germany'
  }

  render() {
    return (
      <div>
        <select value={this.state.country} onChange={(ev) => {this.setState({country: ev.target.value})}}>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="New Zealand">New Zealand</option>
        </select>
        <hr/>
        <button onClick={() => {console.log(this.state.country);}}>点击查看状态值</button>
      </div>
    )
  }
}

export default App
