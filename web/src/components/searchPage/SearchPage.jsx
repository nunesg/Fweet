import React, { Component } from "react";
import "components/common/css/MainContent.css";
import SearchBox from "components/common/SearchBox";
import Button from "components/common/Button";

class SearchPage extends Component {
  state = {};

  submit = () => {
    alert("submit!");
    window.location.href = "/results";
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
          <SearchBox
            id="sboxFilterWords"
            placeholder="Words to filter"
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
