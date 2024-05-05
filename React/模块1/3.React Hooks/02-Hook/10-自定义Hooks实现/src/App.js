/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-03 13:00:10
 * @FilePath: \10-自定义Hooks实现\src\App.js
 */
import React, {useState, useEffect} from "react";

function useAddEventListener(cName) {
  useEffect(() => {
    console.log(cName, '挂载|更新，添加事件监听');
    return () => {
      console.log(cName, '卸载，取消事件监听');
    }
  }) 
}

function Home() {
  useAddEventListener('Home--')

  return (
    <div>
      Home
    </div>
  )
}

function About() {
  useAddEventListener('About--')  

  return (
    <div>
      About
    </div>
  )
}

function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
     {isShow && <Home />}
     {isShow && <About />}
     <button onClick={() => {setIsShow(!isShow)}}>切换</button>
    </div>
  )
}

export default App
