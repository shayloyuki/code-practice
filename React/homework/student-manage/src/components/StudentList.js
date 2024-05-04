/*
 * @Date: 2024-05-04 15:50:28
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-04 17:52:34
 * @FilePath: \student-manage\src\components\StudentList.js
 */
import React, {Component} from "react";

class StudentList extends Component{
  render() {
    const {studentList, remStudent} = this.props
    const len = studentList.length
    let totalAge = 0
    let aveAge = 0
    studentList.forEach(student => totalAge += Number(student.age))
    aveAge = Math.floor(totalAge / studentList.length) || 0

    return (
      <div className="col-md-6 col-md-offset-1">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>爱好</th>
                <th>所属学院</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
              {
                studentList.map((student, index) => {
                  return (
                    <tr key={index}>
                        <td>{student.number}</td>
                        <td>{student.name}</td>
                        <td>{student.sex}</td>
                        <td>{student.age}</td>
                        <td>
                            {
                              student.hobbies.map(hobby => {
                                return (
                                  <span key={hobby}>{hobby}</span>
                                )
                              })
                            }
                        </td>
                        <td>{student.college}</td>
                        <td>
                            <span onClick={(e) => remStudent(student.number, e)}>删除</span>
                        </td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
        {!len && <p className="text-center">无学生信息</p>}
        <p>总共有 {len} 个学生</p>
        <p>学生的平均年龄是 {aveAge}</p>
      </div>
    )
  }
}

export default StudentList