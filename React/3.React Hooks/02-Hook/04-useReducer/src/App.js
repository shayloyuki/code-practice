/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 21:37:41
 * @FilePath: \04-useReducer\src\App.js
 */
import React, {useReducer} from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {...state, num: state.num + 1}
    case 'sub':
      return {...state, num: state.num - 1}
    default:
      return {...state}
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, {num: 0})

  return (
    <div>
      <p>数据：{state.num}</p>
      <button onClick={() => dispatch({type: 'add'})}>+1</button>
      <button onClick={() => dispatch({type: 'sub'})}>-1</button>
    </div>
  )
}

function About() {
  const [state, dispatch] = useReducer(reducer, {num: 10})

  return (
    <div>
      <p>数据：{state.num}</p>
      <button onClick={() => dispatch({type: 'add'})}>+1</button>
      <button onClick={() => dispatch({type: 'sub'})}>-1</button>
    </div>
  )
}

function App() {

  return (
    <div>
     <Home />
     <hr/>
     <About/>
    </div>
  )
}

export default App
