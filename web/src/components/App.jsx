import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./mainPage/MainPage";
import ResultsPage from "./resultsPage/ResultsPage.jsx";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/results">
          <ResultsPage />
        </Route>
      </Switch>
    </Router>
  );
}
