/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 22:36:06
 * @FilePath: \23-学生管理系统\src\App.js
 */

import React, {Component} from 'react'
import StudentTitle from './components/StudentTitle'
import AddStudent from './components/AddStudent'
import StudentList from './components/StudentList'

class App extends Component{
  render() {
    return (
      <div className={'container'}>
        <StudentTitle/>
        <AddStudent/>
        <StudentList/>
      </div>
    )
  }
}

export default App
