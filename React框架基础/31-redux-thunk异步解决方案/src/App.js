/*
 * @Date: 2024-04-23 07:53:30
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 08:22:03
 * @FilePath: \31-redux-thunk异步解决方案\src\App.js
 */
/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 08:05:22
 * @FilePath: \31-redux-thunk异步解决方案\src\App.js
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
    // this.props.getPersons([{id: 2, name: 'Alice'}])
    this.props.getPersons()
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
