/* 
 * 01 在函数组件中可以多次使用同一个 Hook 函数
 * 02 简单类型、复杂类型
 * 03 set 操作也是异步的，不能直接修改 state 的原始值
*/
import React, {useState} from "react";

function App() {
  const [ageState, setAgeState] = useState(10)
  const [nameState, setNameState] = useState('lx')
  const [personState, setPersonState] = useState({name: 'Kate', age: 30})
  const [listState, setListState] = useState([
    {name: 'LiHua', age: 18},
    {name: 'ZhangNa', age: 26},
    {name: 'ZhuMing', age: 15},
  ])

  // 修改第一个年龄
  function incrementAge() {
    // 只执行一次，因为是异步的，只有最后一个会生效，结果：20
    // setAgeState(ageState + 10)
    // setAgeState(ageState + 10)
    // setAgeState(ageState + 10)
  
    // 回调函数：都会执行。结果：40
    setAgeState((pre) => pre + 10)
    setAgeState((pre) => pre + 10)
    setAgeState((pre) => pre + 10)
  }

  // 修改第三个对象的姓名
  function nameChange() {
    // 直接修改不会生效
    // personState.name = 'Lily'

    // 覆盖操作
    setPersonState({...personState, name: 'Lily'})
  }

  return (
    <div>
      年龄：{ageState}
      <button onClick={() => incrementAge()}>+10</button>
      <button onClick={() => setAgeState(ageState - 10)}>-10</button>
      <hr/>
      姓名：{nameState}
      <button onClick={() => setNameState('Alice')}>修改姓名</button>
      <hr/>
      对象：{personState.name}--{personState.age}
      <button onClick={() => nameChange()}>修改对象姓名</button>
      <hr/>
      数组：
      {
        listState.map((item, index) => {
          return (
            <p key={index}>{item.name}--{item.age}</p>
          )
        })
      }
    </div>
  )
}

export default App
