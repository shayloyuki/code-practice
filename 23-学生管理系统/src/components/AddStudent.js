/*
 * @Date: 2024-04-06 22:29:59
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-08 07:05:54
 * @FilePath: \23-学生管理系统\src\components\AddStudent.js
 */
import React, {Component} from 'react'

class AddStudent extends Component{
    // 用构造函数简化代码，改变 this 指向，或者以后用箭头函数
    constructor() {
        super()
        this.stateHandler = this.stateHandler.bind(this)
    }

    // 01 定义组件中的状态
    state = {
        number: '',
        name: '',
        sex: '女',
        age: '',
        college: 'Java',
        hobbies: [
            {
                id: 1,
                title: '足球',
                isChecked: false
            },
            {
                id: 2,
                title: '篮球',
                isChecked: true
            },
            {
                id: 3,
                title: '橄榄球',
                isChecked: false
            },
        ]
    }

    stateHandler = (e) => {
        // 获取当前输入的值，然后调用 setState 更新在具体的属性上
        const value = e.target.value
        const prop = e.target.name  
        this.setState({
            [prop]: value
        }, () => {
            console.log('改变了：',prop);
        })
    }

    hobbyHandler = (index, e) => {
        // 当前操作需要提前获取被操作项的索引、事件对象
        const isChecked = e.target.checked
        const hobbies = [...this.state.hobbies]
        hobbies[index].isChecked = isChecked
        this.setState({
            hobbies
        }, ()=> {console.log(this.state.hobbies);})
    }

    render() {
        return (
            <div className={'col-md-5'}>
                <form>
                    <div className="form-group">
                        <label>学号</label>
                        <input type="number" name={"number"} value={this.state.number} onChange={this.stateHandler} className="form-control" placeholder="请输入学号"/>
                    </div>
                    <div className="form-group">
                        <label>姓名</label>
                        <input type="text" name={"name"} alue={this.state.name} onChange={this.stateHandler} className="form-control" placeholder="请输入姓名"/>
                    </div>
                    <div className="form-group">
                        <label>性别&nbsp;&nbsp;</label>
                        <label className="checkbox-inline">
                            <input type="radio" name={"sex"} value={this.state.sex} onChange={this.stateHandler} defaultChecked={this.state.sex === '女'} /> 女
                        </label>
                        <label className="checkbox-inline">
                            <input type="radio" name={"sex"} value={this.state.sex} onChange={this.stateHandler} defaultChecked={this.state.sex === '男'} /> 男
                        </label>
                    </div>
                    <div className="form-group">
                        <label>年龄</label>
                        <input type="text" name={"age"} alue={this.state.age} onChange={this.stateHandler} className="form-control" placeholder="请输入年龄"/>
                    </div>
                    <div className="form-group">
                        <label>入学时间</label> 
                        <input className="form-control" type="date"/>
                    </div>
                    <div className="form-group">
                        <label>爱好</label>
                        {this.state.hobbies.map((hobby, index) => {
                            return (
                                <div className="checkbox" key={hobby.id}>
                                    <label>
                                        <input type="checkbox" value={hobby.title} defaultChecked={hobby.isChecked} onChange={(e) => this.hobbyHandler(index, e)}/> {hobby.title}
                                    </label>
                                </div>
                            )
                        })}
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
