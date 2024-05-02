/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 19:29:25
 * @FilePath: \02-useEffect\src\App.js
 */
/* 
 * useEffect
 *  1 挂载、更新、卸载
 *  2 第一个参数：函数，并且里面还要 return 一个函数
 *  3 第二个参数：数组，内容是能够触发 useEffect 函数的 state
*/
import React, {useState, useEffect} from "react";

function Header() {
  const [strState, setStrState] = useState('lx')
  const [numState, setNumState] = useState(10)

  useEffect(() => {
    console.log('挂载与更新完成了');
    return () => {
      console.log('卸载完成了');
    }
  }, [strState])

  return (
    <div>
      <p>{strState} <button onClick={() => setStrState('Alice')}>修改字符</button></p>
      <p>{numState} <button onClick={() => setNumState(numState + 1)}>修改数值</button></p>
    </div>
  )
}

function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      {isShow && <Header/>}
      <hr/>
      <button onClick={() => setIsShow(!isShow)}>切换</button>
    </div>
  )
}

export default App
