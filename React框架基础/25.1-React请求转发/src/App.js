/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-13 21:11:33
 * @FilePath: \25.1-React请求转发\src\App.js
 */
/* 
 * 01 什么是请求转发
 * 02 react 是如何实现请求转发
 *   a package.json 配置 proxy
 *   b http-proxy-middleware
 * 
 * 1 请求转发：
 * 2 服务端与服务器不存在跨域问题
 * 3 客户端应用发请求给同源的服务端，服务端将请求转发给API服务器，API服务器将数据处理之后返回给客户端应用
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
    // const {data} = await axios.get("http://localhost:3005/api/welcome")
    // 此地址前会自动拼接同源服务器，若没有这个地址，则拼接 proxy 的地址
    const {data} = await axios.get("/api/welcome")  
    this.setState(data)
  }
}

export default App;
