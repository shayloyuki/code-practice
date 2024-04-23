/*
 * @Date: 2024-04-23 07:53:30
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 12:21:16
 * @FilePath: \33-简化action与reducer\src\App.js
 */
/* 
 * 
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as CounterActions from './store/Actions/counter.action'
import { bindActionCreators } from "redux";

class App extends Component {

  render() {
    console.log(this.props,11)
    return (
      <div>
        {/* <button onClick={this.props.increment}>+1</button>
        <span>{this.props.state}</span>
        <button onClick={this.props.decrement}>-1</button> */}
        <button onClick={this.props.increment_action}>+1</button>
        <span>{this.props.state}</span>
        <button onClick={this.props.decrement_action}>-1</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  state: state.CounterReducer.count
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(CounterActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
