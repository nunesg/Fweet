import React, { Component } from "react";

class SearchBox extends Component {
  state = {};

  style = {
    outline: "none",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "5px 10px",
    margin: "2px",
    width: "300px",
    fontSize: "18px",
    fontFamily: "Verdana",
  };

  render() {
    return (
      <input
        style={this.style}
        type="text"
        placeholder="Twitter username"
      ></input>
    );
  }
}

export default SearchBox;
