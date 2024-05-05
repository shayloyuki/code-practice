/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 09:21:00
 * @FilePath: \todolist\src\App.js
 */
/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 09:06:20
 * @FilePath: \todolist\src\App.js
 */
import React, {Component} from "react";
import Header from "./components/Header";
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component{

  render() {
    return (
      <section className="todoapp">
        <Header/>
        <Main />
        <Footer/>
      </section>
    )
  }
}

export default App