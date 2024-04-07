/*
 * @Date: 2024-04-06 22:29:59
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-08 06:17:51
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
        college: 'Java'
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
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="足球"/> 足球
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="篮球"/> 篮球
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="橄榄球"/> 橄榄球
                            </label>
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
