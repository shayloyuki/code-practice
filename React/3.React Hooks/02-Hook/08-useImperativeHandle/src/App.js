/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-03 11:56:43
 * @FilePath: \08-useImperativeHandle\src\App.js
 */
/* 
 * 
*/

import React, {useRef, forwardRef, useImperativeHandle} from "react";

function Home(props, oHome) {
  const oInput = useRef()

  useImperativeHandle(oHome, () => {
    return {
      setValue: () => {
        oInput.current.value="Home自己实现的setValue方法"
      }
    }
  })

  return (
    <div>
      <p>Home 组件</p>
      <input ref={oInput}/>
    </div>
  )
}

const ForwardHome = forwardRef(Home)

function App() {
  const oHome = useRef(Home)

  function btnClick() {
    console.log(oHome);
    oHome.current.setValue()
  }

  return (
    <div>
      {/* <Home ref={oHome}/> */}
      <ForwardHome ref={oHome}/>
      <button onClick={() => btnClick()}>操作input</button>
    </div>
  )
}

export default App
