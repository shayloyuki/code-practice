/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-04 17:54:43
 * @FilePath: \student-manage\src\App.js
 */
import React, {Component} from "react";
import StudentTitle from './components/StudentTitle'
import AddStudent from './components/AddStudent'
import StudentList from './components/StudentList'


class App extends Component{
  // 1 定义数据源
  state = {
    studentList: []
  }

  // 2 定义事件
  addStudent = (student, callback) => {
    this.setState({
      studentList: [...this.state.studentList, student]
    }, () => {
      callback()
    })
  }

  remStudent = (number) => {
    if (window.confirm('是否确认删除该条数据')) {
      const index = this.state.studentList.findIndex(student => student.number === number)
      let studentList = JSON.parse(JSON.stringify(this.state.studentList))
      studentList.splice(index, 1)
      this.setState({
        studentList
      }, () => {
        window.alert('删除成功')
      })
    }
  }

  render() {
    return (
      <div  className="container">
        <StudentTitle />
        <AddStudent addStudent={this.addStudent}/>
        <StudentList studentList={this.state.studentList} remStudent={this.remStudent}/>
      </div>
    )
  }
}

export default App