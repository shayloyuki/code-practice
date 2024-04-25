import React, {Component} from 'react'

class Header extends Component{
  // 在类组件中默认存在 state 属性，是一个对象，用于保存当前组件的数据
  // 之后可以通过 setState 方法修改数据的值，最后修改后的状态会自动展示在 DOM 界面上
  state = {
    name: 'Alice',
    age: 30
  }

  handler = () => {
    // 在 react 中不能直接修改 state 值
    // this.state.name = 'Lily'

    this.setState({
      name: 'Lily'
    })
  }

  render() {
    return (
      <>
      <span>{this.state.name}</span>
      <span>{this.state.age}</span>
      <button onClick={this.handler}>点击</button>
      </>
    )
  }
}

export default Header