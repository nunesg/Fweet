import React, { Component } from "react";
import Nav from "components/common/Nav";
import "components/common/css/CommonPage.css";
// import `${__dirname}/web/src/components/common/css/CommonPage.css`;
import Login from "components/homePage/Login";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="common-page">
        <Nav />
        <Login onLoginClick={this.props.onLoginClick} />
      </div>
    );
  }
}

export default Home;
