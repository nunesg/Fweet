import React, { Component } from "react";

class SearchButton extends Component {
  state = {};
  style = {
    outline: "none",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "5px 10px",
    margin: "2px",
    fontSize: "18px",
  };
  render() {
    return (
      <button style={this.style} onClick={this.props.sendQuery}>
        Enviar
      </button>
    );
  }
}

export default SearchButton;
