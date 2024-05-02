import React, {Component} from "react";
import { withRouter } from "react-router-dom";

class Test extends Component {
  render() {
    console.log(this.props, 'Test');
    return (
      <div>Test内容</div>
    )
  }
}

export default withRouter(Test)