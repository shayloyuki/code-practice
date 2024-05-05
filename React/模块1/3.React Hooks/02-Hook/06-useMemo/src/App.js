/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 23:05:44
 * @FilePath: \06-useMemo\src\App.js
 */
import React, {useState, memo, useCallback, useMemo} from "react";

function getData() {
  console.log('getData被调用了');
  let data = 0
  for (let i = 0; i < 999; i++) {
    data += 1
  }
  return data
}

function App() {
  console.log('App渲染了');
  const [numState, setNumState] = useState(0)
  const [ageState, setAgeState] = useState(10)
  // const num = getData()

  const num = useMemo(() => {
    return getData()
  }, [])

  function increment() {
    setNumState(numState + 10)
  }

  return (
    <div>
      <p>数值：{numState}</p>
      <p>年龄：{ageState}</p>
      <button onClick={() => increment()}>修改num</button>
      <p>num: {num}</p>
    </div>
  )
}

export default App
