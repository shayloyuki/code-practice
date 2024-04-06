/*
 * @Date: 2024-04-06 17:50:33
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 17:57:54
 * @FilePath: \22-非受控表单\src\Form.js
 */
import React, {Component} from 'react'

class FormComponent extends Component{

  submit = (ev) => {
    ev.preventDefault()
    // 非受控组件指的是某个表单元素里的数据不受 react 管理
    // 可以直接从 DOM 元素本身进行获取（获取 DOM 元素，获取具体的值）
    console.log(this.refs.userName.value);
  }

  render() {
    return(
      <form onSubmit={this.submit}>
        <input type="text" ref="userName"/>
        <input type="submit"/>
      </form>
    )
  }
}

export default FormComponent