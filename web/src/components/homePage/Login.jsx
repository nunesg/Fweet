import React, { Component } from "react";
import "components/common/css/MainContent.css";
import Button from "components/common/Button";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="main-content">
        <Title />
        <Subtitle />
        <div className="elem-m">
          <Button content={<LoginButton />} onClick={this.props.onLoginClick} />
        </div>
      </div>
    );
  }
}

function Title() {
  return <span className="ttl">Fweet</span>;
}

function Subtitle() {
  return <span className="sub-ttl">The information in your hands</span>;
}

class LoginButton extends Component {
  state = {};
  style = {
    marginLeft: "8px",
    height: "1em",
    width: "1em",
  };
  render() {
    return (
      <span>
        <span>Login</span>
        <img
          src="https://img.pngio.com/white-twitter-icon-free-white-social-icons-twitter-logo-white-256_256.png"
          style={this.style}
        />
      </span>
    );
  }
}

export default Login;
