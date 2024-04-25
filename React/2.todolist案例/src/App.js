/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 00:30:46
 * @FilePath: \2.todolist案例\src\App.js
 */
import React, { Component } from "react";
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {

  render() {
    return (
      <div className="todoapp">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }

}

export default App
