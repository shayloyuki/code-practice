/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 20:59:43
 * @FilePath: \03-useContext\src\App.js
 */
/* 
 *
*/
import React, {createContext, useContext} from "react";

const UserContext = createContext({})
const AreaContext = createContext({})

function Header() {
  const userInfo = useContext(UserContext)
  const areaInfo = useContext(AreaContext)
  return (
    // <UserContext.Consumer>
    //   {
    //     (value1) => {
    //       return (
    //         <AreaContext.Consumer>
    //           {
    //             (value2) => {
    //               return (
    //                 <div>
    //                   <p>{value1.name}</p>
    //                   <p>{value1.age}</p>
    //                   <p>{value2.width}</p>
    //                 </div>
    //               )
    //             }
    //           }
    //         </AreaContext.Consumer>
    //       )
    //     }
    //   }
    // </UserContext.Consumer>

    <div>
      <p>{userInfo.name}</p>
      <p>{userInfo.age}</p>
      <p>{areaInfo.width}</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <UserContext.Provider value={{'name': 'lx', 'age': 28}}>
        <AreaContext.Provider value={{'width': 100}}>
          <Header />
        </AreaContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
