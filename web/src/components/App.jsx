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
import SearchPage from "components/searchPage/SearchPage";
import * as AuthenticationController from "components/controllers/authenticationController.js";
import CommonPage from "./common/CommonPage";

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
          {/* <Route path="/" exact>
            <MainPage setUsername={this.setUsername} />
            <React.Fragment>{this.redirect()}</React.Fragment>
          </Route> */}
          {/* <Route path="/results">
            <ResultsPage username={this.state.username} />
          </Route> */}

          <Route exact path="/">
            <Redirect to="/common" />
          </Route>

          <Route
            path="/common"
            render={({ match, ...rest }) => {
              return <RenderCommon match={match} />;
            }}
          />

          <Route path="/results">
            <h1>results</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}

function RenderCommon({ match }) {
  var path = match.path;

  return (
    <CommonPage>
      <Switch>
        <Route
          exact
          path={`${path}`}
          render={() => {
            return (
              <Home onLoginClick={AuthenticationController.authenticate} />
            );
          }}
        />
        <Route
          path={`${path}/options`}
          render={() => {
            return <SearchOptions />;
          }}
        />
        <Route
          path={`${path}/search`}
          render={() => {
            return <SearchPage />;
          }}
        />
      </Switch>
    </CommonPage>
  );
}

export default App;
