/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 08:02:03
 * @FilePath: \28-Redux工作流程\src\App.js
 */
/* 
 * 安装两个包：redux 和 react-redx
 */

import React, { Component } from "react";
import Counter from './Components/Counter'

class App extends Component {

  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }

}

export default App;
