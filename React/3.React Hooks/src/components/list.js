/*
 * @Date: 2024-05-01 15:28:32
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-01 16:53:20
 * @FilePath: \3.React Hooks\src\components\list.js
 */
import React, {Component} from "react";
import { Link } from "react-router-dom";

class List extends Component {
  render() {
    return (
      <div>
        <p><Link to="/detail/1">列表文章1</Link></p>
        <p><Link to="/detail/2">列表文章2</Link></p>
      </div>
    )
  }
}

export default List