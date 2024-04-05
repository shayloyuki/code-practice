import React, {Component} from 'react'

class Header extends Component{
  render() {
    // 在类组件中存在 props 属性，外部所传递的数据都可通过它访问
    const {name, age} = this.props
    return (
      <div>
        {/* <p>{this.props.name}</p>
        <p>{this.props.age}</p> */}
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}

export default Header