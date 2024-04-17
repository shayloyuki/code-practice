/*
 * @Date: 2024-04-17 07:59:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 22:53:16
 * @FilePath: \28-提取action代码为函数\src\Components\Counter.js
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

function Counter(props) {
  console.log(props);
  return (
    <div>
      {/* <button onClick={() => {props.dispatch({ type: 'increment'})}}>+1</button>
      <button onClick={() => {props.dispatch({ type: 'increment_n', payload: 5})}}>+5</button>
      <span>{props.count}</span>
      <button onClick={() => {props.dispatch({ type: 'decrement'})}}>-1</button> */}

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

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch({type: 'increment'})
  },
  increment_n(payload) {
    dispatch({type: 'increment_n', payload})
  },
  decrement() {
    dispatch({type: 'decrement'})
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)