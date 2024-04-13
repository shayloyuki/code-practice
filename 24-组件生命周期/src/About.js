import React, {Component, PureComponent} from 'react'

// 解决办法二：使用 PureComponent
class About extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: 10
    }
  }

  handler = () => {
    this.setState({
      count: this.state.count + 5
    })
  }

  render() {
    console.log('About 组件执行了 render');
    return (
      <div>
        <hr />
        About组件的内容
        <span>{this.state.count}</span>
        <button onClick={this.handler}>点击</button>
      </div>
    )
  }

  // 存在问题：点击 App 中按钮时，About 组件也会更新（About 组件执行了 render），造成性能浪费
  // shouldComponentUpdate(nextProps, nextState) {
  //   return true
  // }

  // 解决办法一：对比更新状态中的 count 和原 count 是否有改变
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.count === this.state.count) {
  //     return false
  //   }    
  //   return true
  // }
}

export default About