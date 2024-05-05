/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 22:24:43
 * @FilePath: \05-useCallback\src\App.js
 */
import React, {useState, memo, useCallback} from "react";

function Home(props) {
  console.log('Home渲染了', {props});
  return(
    <div>
      <p>Home组件</p>
      <button onClick={() => props.handler()}>增加数值</button>
    </div>
  )
}

function About(props) {
  console.log('About渲染了', {props});
  return(
    <div>
      <p>About组件</p>
      <button onClick={() => props.handler()}>减少年龄</button>
    </div>
  )
}

const MemoHome = memo(Home)
const MemoAbout = memo(About)

function App() {
  console.log('App渲染了');
  const [numState, setNumState] = useState(0)
  const [ageState, setAgeState] = useState(10)

  // function increment() {
  //   setNumState(numState + 2)
  // }

  // function decrement() {
  //   setAgeState(ageState - 2)
  // }

  // numState 若没有改变，则 increment 不会改变
  const increment = useCallback(() => {
    setNumState(numState + 2)
  }, [numState])

  // ageState 若没有改变，则 decrement 不会改变
  const decrement = useCallback(() => {
    setAgeState(ageState - 2)
  }, [ageState])

  return (
    <div>
      <p>数值：{numState}</p>

      <p>年龄：{ageState}</p>

      <hr/>
      <MemoHome handler={increment}/>
      <MemoAbout handler={decrement}/>
    </div>
  )
}

export default App
