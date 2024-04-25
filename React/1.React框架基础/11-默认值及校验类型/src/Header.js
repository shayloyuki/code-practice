/*
 * @Date: 2024-04-05 17:53:49
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 20:28:26
 * @FilePath: \11-默认值及校验类型\src\Header.js
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component{
  static defaultProps ={
    name: 'Kate',
    age: 38
  }
  render() {
    // 在类组件中存在 props 属性，外部所传递的数据都可通过它访问
    const {name, age} = this.props
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default Header