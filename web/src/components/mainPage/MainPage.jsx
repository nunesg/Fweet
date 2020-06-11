import React, { Component } from "react";
import SearchPage from "./SearchPage";

class MainPage extends Component {
  state = {};
  style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgb(21, 32, 43)",
  };
  render() {
    return (
      <div style={this.style}>
        <SearchPage />
      </div>
    );
  }
}

export default MainPage;
