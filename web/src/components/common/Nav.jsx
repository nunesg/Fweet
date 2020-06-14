import React, { Component } from "react";
import "components/common/css/Nav.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="navBar">
        <About />
      </div>
    );
  }
}

function About() {
  return <span className="about">About</span>;
}

export default Nav;
