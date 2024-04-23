/*
 * @Date: 2024-04-23 07:53:30
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 11:05:13
 * @FilePath: \32-redux-saga异步解决方案\src\App.js
 */
/* 
 * 
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as PersonActions from './store/Actions/person.action'
import { bindActionCreators } from "redux";

class App extends Component {

  handler = () => {
    this.props.load_Person()
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handler}>获取数据</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  state: state.PersonReducer.person
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(PersonActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps )(App)
