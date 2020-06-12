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
    alert(`user ${user}`);
    this.setState({ querySubmitted: "true", username: user });
  };

  redirect() {
    if (this.state.querySubmitted === "true") {
      return <Redirect to="/results" />;
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage setUsername={this.setUsername} />
            <React.Fragment>{this.redirect()}</React.Fragment>
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
