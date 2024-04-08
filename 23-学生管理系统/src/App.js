/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-08 08:29:21
 * @FilePath: \23-学生管理系统\src\App.js
 */

import React, {Component} from 'react'
import StudentTitle from './components/StudentTitle'
import AddStudent from './components/AddStudent'
import StudentList from './components/StudentList'

class App extends Component{

  state = {
    studentList: []
  }

  addList = (student, callback) => {
    this.setState({
      studentList: [...this.state.studentList, student]
    }, () => {
      callback()
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className={'container'}>
        <StudentTitle/>
        <AddStudent addList={this.addList} />
        <StudentList/>
      </div>
    )
  }
}

export default App
