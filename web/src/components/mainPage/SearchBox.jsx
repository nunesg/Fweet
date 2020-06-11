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
  };

  handleKeyUpEvent(event) {
    if (event.keyCode == 13) {
      this.props.sendQuery();
    }
  }

  render() {
    return (
      <input
        id="searchBox"
        style={this.style}
        type="text"
        placeholder="Twitter username"
        onKeyUp={(event) => this.handleKeyUpEvent(event)}
      ></input>
    );
  }
}

export default SearchBox;
