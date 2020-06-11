import React, { Component } from "react";

class ResultsPage extends Component {
  state = {};

  componentDidMount() {
    this.makeRequest();
  }

  async makeRequest() {
    var qry = {
      type: "TIMELINE",
      body: this.props.username,
    };

    console.log(JSON.stringify(qry));
    var options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(qry), // body data type must match "Content-Type" header
    };
    console.log(options);
    var response = await fetch("http://127.0.0.1:3333/api", options);
    var timeline = await response.json();
    console.log(timeline);

    // var response = await fetch("http://localhost:3333/", { mode: "no-cors" });
    // console.log(response.json());
  }
  render() {
    return (
      <div>
        <h1>Results Page</h1>
      </div>
    );
  }
}

export default ResultsPage;
