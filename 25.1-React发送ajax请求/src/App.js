/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-13 18:38:12
 * @FilePath: \25.1-React发送ajax请求\src\App.js
 */
/* 
 *  
 */

import React, { Component } from "react";
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      msg: ''
    }
  }
 
  render() {
    return (
      <div>当前数据为：{this.state.msg}</div>
    );
  }

  async componentDidMount() {
    // const data = await axios.get("http://localhost:3005/api/welcome").then(res => res.data)
    const {data} = await axios.get("http://localhost:3005/api/welcome")
    this.setState(data)
  }
}

export default App;
