/*
 * @Date: 2024-04-17 07:59:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 21:27:27
 * @FilePath: \28-获取store数据\src\Components\Counter.js
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

function Counter(props) {
  console.log(props);
  return (
    <div>
      <button>+1</button>
      <span>{props.count}</span>
      <button>-1</button>
    </div>
  )
}

// export default connect((state) => ({
//   count: state.count
// }))(Counter)

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter)