/*
 * @Date: 2024-02-19 23:26:46
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 10:39:15
 * @FilePath: \05-循环数据\src\App.js
 */

/* 
 * 01. JSX 当中可以直接将数组中的数据解构
 * 
 */
// const arr = [<p>1</p>,<p>22</p>, <p>333</p>]
const arr = [
  {
    id: 1,
    name: 'lx',
    age: 28,
    sex: "female"
  },
  {
    id: 2,
    name: 'Alice',
    age: 18,
    sex: 'female'
  }
]


function App() {
  // const res = arr.map(item => 
  //   <li key={item.id}>item.name</li>
  // )

  // const res = arr.map(item => 
  //   <li key={item.id}>
  //     <span>{item.name}--</span>
  //     <span>{item.age}--</span>
  //     <span>{item.sex}--</span>
  //   </li>
  // )

  const res = arr.map(item => {
    return (<li key={item.id}>
      <span>{item.name}--</span>
      <span>{item.age}--</span>
      <span>{item.sex}--</span>
    </li>)
  })
  return (
    <ul>{res}</ul>
  )
}

export default App
