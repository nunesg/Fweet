import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ResultsPage from "components/resultsPage/ResultsPage";
import Home from "components/homePage/Home";
import SearchOptions from "components/searchOptions/SearchOptions";
import SearchPage from "components/searchPage/SearchPage";
import * as AuthenticationController from "components/controllers/authenticationController.js";
import CommonPage from "./common/CommonPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/common" />
          </Route>

          <Route
            path="/common"
            render={({ match }) => {
              return <RenderCommon match={match} />;
            }}
          />

          <Route
            path="/results/:username/:queryType"
            render={({
              match: {
                params: { username, queryType },
              },
            }) => {
              return <ResultsPage username={username} queryType={queryType} />;
            }}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

function RenderCommon({ match: { path } }) {
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
          path={`${path}/search/:queryType`}
          render={({ match }) => {
            return <SearchPage queryType={match.params.queryType} />;
          }}
        />
      </Switch>
    </CommonPage>
  );
}

export default App;
