/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-03 00:00:14
 * @FilePath: \07-useRef\src\App.js
 */
/* 
 * 01 useRef 可用于获取元素，类似 createRef
 * 02 useRef 还可用于保存数据
 * 03 useRef 保存的数据除非手动修改，否则它是不会改变的
*/

import React, {useState, useRef} from "react";

function App() {
  const [numState, setNumState] = useState(0)
  const obj = useRef(20)

  return (
    <div>
      <p>obj.current: {obj.current}</p>
      <p>numState: {numState}</p>
      <button onClick={() => setNumState(numState + 1)}>操作numState</button>
    </div>
  )
}

export default App
