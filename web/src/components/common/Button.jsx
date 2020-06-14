import React, { Component } from "react";
import "components/common/css/Button.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <button className="bttn" onClick={this.props.onClick}>
        {this.props.content}
      </button>
    );
  }
}

export default Button;
