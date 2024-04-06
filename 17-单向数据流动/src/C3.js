/*
 * @Date: 2024-04-06 34:50:36
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 15:10:14
 * @FilePath: \17-单向数据流动\src\C3.js
 */
import React from 'react'

function C3(props) {
  console.log(props);
  return (
    <>
      <div>C3组件</div>
      <span>{props.name}</span>
      <button onClick={() => {props.change({name: 'Alice', age: 30})}}>点击修改</button>
    </>
  )
}

export default C3