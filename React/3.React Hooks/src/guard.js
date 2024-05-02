import React, {Component} from "react";
import { Route, Redirect } from "react-router-dom";
import auth from './auth'

class AuthRouteGuard extends Component{
  render() {
    // console.log(this.props);
    const {component: Component, ...rest} = this.props
    return (
      <div>
        <Route {...rest} render={(props) => {
          if (auth.isAuthorized()) {
            // 进入路由
            console.log('进入Component路由');
            return <Component {...props}/>
          } else {
            // 重定向
            console.log('重定向到home');
            return <Redirect to="/home"/>
          }
        }}/>
      </div>
    )
  }
}

export default AuthRouteGuard