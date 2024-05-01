/*
 * @Date: 2024-05-01 15:28:32
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-01 16:54:03
 * @FilePath: \3.React Hooks\src\components\detail.js
 */
import React, {Component} from "react";

class Detail extends Component {
  render() {
    return (
      <div>{this.props.match.params.id}</div>
    )
  }
}

export default Detail