import React, {Component} from 'react'

class About extends Component {
  render() {
    return (
      <div>
        <hr/>
        About组件的内容
      </div>
    )
  }

  foo = () => {
    console.log('About 组件中的 click 操作发生了');
  }

  componentDidMount() {
    // 当 About 组件挂载完成之后就可以执行 DOM 相关操作，例如此时添加事件监听
    window.addEventListener('click', this.foo)
  }

  componentWillUnmount() {
    // 当前方法会在组件卸载之前执行
    window.removeEventListener('click', this.foo)
  }
}

export default About