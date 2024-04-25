/*
 * @Date: 2024-04-25 23:57:41
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 00:05:40
 * @FilePath: \todos拆分\src\components\Header.js
 */
import React, { Component } from "react";

class Header extends Component {

  render() {
    return (
      <header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="还有什么任务没有完成?" autoFocus />
			</header>
    );
  }
}

export default Header