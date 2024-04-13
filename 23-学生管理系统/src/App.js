/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-13 13:05:25
 * @FilePath: \23-学生管理系统\src\App.js
 */

import React, { Component } from "react";
import StudentTitle from "./components/StudentTitle";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

class App extends Component {
  state = {
    studentList: [{
      "number": "01",
      "name": "张三",
      "sex": "男",
      "age": 10,
      "date": "2020-12-04",
      "hobbies": ["足球", "篮球"],
      "college": "大前端"
  }, {
      "number": "02",
      "name": "李四",
      "sex": "男",
      "age": 20,
      "date": "2030-12-05",
      "hobbies": ["足球", "橄榄球"],
      "college": "Java"
  }, {
      "number": "03",
      "name": "王五",
      "sex": "男",
      "age": 30,
      "date": "2040-11-03",
      "hobbies": ["足球", "橄榄球", "篮球"],
      "college": "python"
  }],
  };

  // 定义一个方法用于处理 studentList 状态
  addStudent = (student, callback) => {
    this.setState(
      {
        studentList: [...this.state.studentList, student],
      },
      () => {
        callback();
      }
    );
  };

  // 定义删除操作
  removeStudent = (number) => {
    // 核心：利用 number 找到 studentList 中需要被删除的项，将它从原数据中拿出
    // 最后再将处理后的数据重新 setState 给 state，之后界面就会自动更新

    // 01 将原数据进行深拷贝
    let studentList = JSON.parse(JSON.stringify(this.state.studentList))

    // 02 从拷贝后的原数据中查找 number 所对应的项
    const index = studentList.findIndex(student => student.number === number)

    // 03 利用上述的 index 将目标项从数组中删除
    studentList.splice(index, 1)

    // 04 数据同步操作
    this.setState({studentList}, () => {
      console.log('studentList:', this.state.studentList);
    })
  }

  render() {
    return (
      <div className={"container"}>
        <StudentTitle />
        <AddStudent addStudent={this.addStudent} />
        <StudentList studentList={this.state.studentList} removeStudent={this.removeStudent}/>
      </div>
    );
  }
}

export default App;
