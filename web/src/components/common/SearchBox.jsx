import React, { Component } from "react";
import "components/common/css/SearchBox.css";

// receives id, placeholder and submit() params
class SearchBox extends Component {
  state = {};

  componentDidMount() {
    this.setState({ id: this.id });
  }

  keyUpEvent = (event) => {
    if (event.keyCode === 13) {
      this.props.submit();
    }
  };

  render() {
    return (
      <input
        id={this.props.id}
        className="sbox"
        type="text"
        onKeyUp={(event) => {
          this.keyUpEvent(event);
        }}
        placeholder={this.props.placeholder}
      ></input>
    );
  }
}

export default SearchBox;
