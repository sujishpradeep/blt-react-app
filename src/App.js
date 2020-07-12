import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wolfe from "./Wolfe";
import LandingPage from "./LandingPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/wolfe" render={(props) => <Wolfe {...props} />} />
          <Route path="/channel" render={(props) => <Wolfe {...props} />} />
          <Route
            path="/"
            exact
            render={(props) => <LandingPage {...props} />}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
