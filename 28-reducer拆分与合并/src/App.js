/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 00:44:25
 * @FilePath: \28-reducer拆分与合并\src\App.js
 */
/* 
 * 
 */

import React, { Component } from "react";
import Counter from './Components/Counter'
import Person from "./Components/Person";

class App extends Component {

  render() {
    return (
      <div>
        <Counter/>
        <hr/>
        <Person />
      </div>
    );
  }

}

export default App;
