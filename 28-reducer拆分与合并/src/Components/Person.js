/*
 * @Date: 2024-04-22 00:40:11
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 01:10:09
 * @FilePath: \28-reducer拆分与合并\src\Components\Person.js
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as personActions from '../Store/Actions/Person.action'

function Person(props) {
  // console.log(props.person, 111);
  return (
    <div>
      <button onClick={() => props.addPerson({id: 2, name: 'Alice'})}>新增用户</button>
      <ul>
        {props.person.map(item => {
          return (
            <li key={item.id}>{item.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  person: state.person
})

// 生成多个指令函数，返回对象
// bindActionCreators({}, dispatch)

const mapDispatchToProps = dispatch => ({
  // personActions 是对象
  // bindActionCreators返回结果也是对象，因此要解构
  ...bindActionCreators(personActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Person)