/*
 * @Date: 2024-04-05 16:54:57
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 17:06:17
 * @FilePath: \08-外联样式（降为 React17, node16.13.0）\src\Test.js
 */
import React from "react";
import style from "./Test.module.css"
import styled from "styled-components"

// 自定义标签 CSS-IN-JS
const SectionDiv = styled.div.attrs({
  className: 'box1 box2'
})`
  width: 100px;
  height: 100px;
  background-color: hotpink;
`

function Test () {
  return (
    <div>
      <div className={'box'}>Test 中的 div</div>
      <p className={style.item}>Test 中的 P ，使用自己的样式</p>
      <SectionDiv />
    </div>
  )
}

export default Test