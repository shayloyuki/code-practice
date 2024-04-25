/*
 * @Date: 2024-04-05 17:28:45
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 17:34:24
 * @FilePath: \09-组件创建方式\src\About.js
 */
import React, {Component, Fragment} from 'react'

class About extends Component {
  render(){
    return(
      // <div>About 组件中的内容</div>
      // <Fragment>About 组件中的内容</Fragment> // 必须引入 Fragment
      <>About 组件中的内容</> // 语法糖
    )
  }
}

export default About