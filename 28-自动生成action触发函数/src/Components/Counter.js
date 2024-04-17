/*
 * @Date: 2024-04-17 07:59:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 23:17:24
 * @FilePath: \28-自动生成action触发函数\src\Components\Counter.js
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as counterActions from '../Store/Actions/Counter.action'

function Counter(props) {
  console.log(props);
  return (
    <div>
      <button onClick={props.increment}>+1</button>
      <button onClick={() => {props.increment_n(5)}}>+5</button>
      <span>{props.count}</span>
      <button onClick={props.decrement}>-1</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count
})

// 生成多个指令函数，返回对象
// bindActionCreators({}, dispatch)

const mapDispatchToProps = dispatch => ({
  // increment() {
  //   dispatch({type: 'increment'})
  // },
  // increment_n(payload) {
  //   dispatch({type: 'increment_n', payload})
  // },
  // decrement() {
  //   dispatch({type: 'decrement'})
  // },

  // counterActions 是对象
  // bindActionCreators返回结果也是对象，因此要解构
  ...bindActionCreators(counterActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)