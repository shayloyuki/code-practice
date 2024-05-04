import React, {Component} from "react";

class AddStudent extends Component{


  // 1 定义数据源
  state = {
    number: '',
    name: '',
    sex: '女',
    age: '',
    hobbies: [
      {
        id: 1,
        title: '足球',
        isChecked: true
      },
      {
        id: 2,
        title: '篮球',
        isChecked: false
      },
      {
        id: 3,
        title: '橄榄球',
        isChecked: false
      },
    ],
    college: 'Java'
  }

  origin = JSON.parse(JSON.stringify(this.state))

  // 2 定义事件
  stateHandler = (e) => {
    const {value, name: prop} = e.target
    this.setState({
      [prop]: value
    })
  }

  hobbyHandler = (index, e) => {
    let hobbies = JSON.parse(JSON.stringify(this.state.hobbies))
    hobbies[index].isChecked = e.target.checked
    this.setState({
      hobbies
    })
  }

  submit = (e) => {
    e.preventDefault()
    const hobbies = this.state.hobbies
    .filter(hobby => hobby.isChecked)
    .map(hobby => hobby.title)
    const formValue = {
      ...this.state,
      hobbies
    }
    this.props.addStudent(formValue, () => {
      this.setState(this.origin)
    })
  }

  render() {
    return (
      <div className="col-md-5">
        <form onSubmit={this.submit}>
            <div className="form-group">
                <label>学号</label>
                <input type="number" className="form-control" placeholder="请输入学号" name={"number"} value={this.state.number} onChange={this.stateHandler}/>
            </div>
            <div className="form-group">
                <label>姓名</label>
                <input type="text" className="form-control" placeholder="请输入姓名" name={"name"} value={this.state.name} onChange={this.stateHandler}/>
            </div>
            <div className="form-group">
                <label>性别&nbsp;&nbsp;</label>
                <label className="checkbox-inline" >
                    <input type="radio" value="女" name={"sex"} checked={this.state.sex === '女'} onChange={this.stateHandler}/> 女
                </label>
                <label className="checkbox-inline">
                    <input type="radio" value="男" name={"sex"} checked={this.state.sex === '男'} onChange={this.stateHandler}/> 男
                </label>
            </div>
            <div className="form-group">
                <label>年龄</label>
                <input type="text" className="form-control" placeholder="请输入年龄" name={"age"} value={this.state.age} onChange={this.stateHandler}/>
            </div>
            <div className="form-group">
                <label>爱好</label>
                <div className="checkbox">
                  {
                    this.state.hobbies.map((hobby, index) => {
                      return (
                        <label key={hobby.id}>
                          <input type="checkbox" name={"hobbies"} value={hobby.title} checked={hobby.isChecked} onChange={(e) => this.hobbyHandler(index, e)}/> {hobby.title}
                        </label>
                      )
                    })
                  }
                </div>
            </div>
            <div className="form-group">
                <label>所属学院</label>
                <select className="form-control" name={"college"} value={this.state.college} onChange={this.stateHandler}>
                    <option value="大前端">大前端</option>
                    <option value="Java">Java</option>
                    <option value="python">python</option>
                </select>
            </div>
            <button type="submit" className="btn btn-default">添加</button>
        </form>
      </div>
    )
  }
}

export default AddStudent