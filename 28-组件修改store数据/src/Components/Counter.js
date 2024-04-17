/*
 * @Date: 2024-04-17 07:59:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 22:17:50
 * @FilePath: \28-组件修改store数据\src\Components\Counter.js
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

function Counter(props) {
  console.log(props);
  return (
    <div>
      <button onClick={() => {props.dispatch({ type: 'increment'})}}>+1</button>
      <span>{props.count}</span>
      <button onClick={() => {props.dispatch({ type: 'decrement'})}}>-1</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter)