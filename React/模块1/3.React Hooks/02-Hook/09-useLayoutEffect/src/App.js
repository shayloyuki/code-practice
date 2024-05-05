/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-03 12:31:16
 * @FilePath: \09-useLayoutEffect\src\App.js
 */
import React, {useRef, useState, useEffect, useLayoutEffect} from "react";
import './App.css'

function Home() {
  const oP = useRef()

  // 刷新有残影
  // useEffect(() => {
  //   oP.current.style.left = '0px'
  //   oP.current.style.left = '500px'
  //   console.log('挂载|更新, useEffect')
  //   return () => {
  //     console.log('卸载, useEffect')
  //   }
  // })

  // 刷新无残影
  useLayoutEffect(() => {
    oP.current.style.left = '0px'
    oP.current.style.left = '500px'
    console.log('挂载|更新, useLayoutEffect')
    return () => {
      console.log('卸载, useLayoutEffect')
    }
  })

  return (
    <div>
      Home组件
      <p ref={oP}>Home组件中的p</p>
    </div>
  )
}

function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      {isShow && <Home/>}
      <button onClick={() => {setIsShow(!isShow)}}>切换</button>
    </div>
  )
}

export default App
