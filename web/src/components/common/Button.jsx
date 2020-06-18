import React, { Component } from "react";
import "components/common/css/Button.css";

class Button extends Component {
  state = {};
  getClassName() {
    var str = "bttn ";
    if (this.props.small) {
      str += "bttn-sm";
    }
    return str;
  }
  render() {
    return (
      <button className={this.getClassName()} onClick={this.props.onClick}>
        {this.props.content}
        {this.props.children}
      </button>
    );
  }
}

export default Button;
