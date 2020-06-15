import React, { Component } from "react";
import "components/common/css/CommonPage.css";
import Nav from "components/common/Nav";

class CommonPage extends Component {
  state = {};
  render() {
    return (
      <div className="common-page">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default CommonPage;
