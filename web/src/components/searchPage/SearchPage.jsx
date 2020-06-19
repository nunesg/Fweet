import React, { Component } from "react";
import "components/common/css/MainContent.css";
import SearchBox from "components/common/SearchBox";
import Button from "components/common/Button";
import * as Utils from "components/Utils.js";

class SearchPage extends Component {
  state = {};

  submit = () => {
    var username = document.getElementById("sboxUsername").value;
    username = Utils.removeSpecialCharacters(username);

    window.location.pathname = `/results/${username}/${this.props.queryType}`;
  };

  render() {
    return (
      <div className="main-content">
        <Subtitle />
        <div className="elem-m">
          <SearchBox
            id="sboxUsername"
            placeholder="Username"
            submit={this.submit}
          />
        </div>
        <div className="elem-m">
          <Button content="Send" small="true" onClick={this.submit} />
        </div>
      </div>
    );
  }
}

function Subtitle() {
  return <div className="sub-ttl">Whose timeline to search from?</div>;
}

export default SearchPage;
