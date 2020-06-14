import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from "components/mainPage/MainPage";
import ResultsPage from "components/resultsPage/ResultsPage";
import Home from "components/homePage/Home";
import SearchOptions from "components/searchOptions/SearchOptions";
import * as authenticationController from "components/controllers/authenticationController.js";

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
          <Route path="/home">
            <Home onLoginClick={authenticationController.authenticate} />
          </Route>
          <Route path="/search/options">
            <SearchOptions />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
