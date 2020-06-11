import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MainPage from "./mainPage/MainPage";
import ResultsPage from "./resultsPage/ResultsPage.jsx";

class App extends Component {
  state = {
    username: "",
  };

  setUsername = (user) => {
    this.setState({ querySubmitted: "true", username: user });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage setUsername={this.setUsername} />
            {this.state.querySubmitted ? <Redirect to="/results" /> : () => {}}
          </Route>
          <Route path="/results">
            <ResultsPage username={this.state.username} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
