/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: luoxue
 * @LastEditTime: 2024-04-08 10:49:22
 * @FilePath: \23-学生管理系统\src\App.js
 */

import React, { Component } from "react";
import StudentTitle from "./components/StudentTitle";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

class App extends Component {
  state = {
    studentList: [],
  };

  addList = (student, callback) => {
    this.setState(
      {
        studentList: [...this.state.studentList, student],
      },
      () => {
        callback();
      }
    );
  };

  render() {
    return (
      <div className={"container"}>
        <StudentTitle />
        <AddStudent addList={this.addList} />
        <StudentList />
      </div>
    );
  }
}

export default App;
