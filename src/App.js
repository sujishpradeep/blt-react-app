import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wolfe from "./Wolfe";
import LandingPage from "./LandingPage";
import Channel from "./Channel";
import Gartley from "./gartley";
import Bat from "./bat";
import Butterfly from "./butterfly";
import Crab from "./crab";
import Cypher from "./cypher";
import Abcd from "./abcd";
import Trendline from "./trendline";
import Triangle from "./triangle";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/wolfe" render={(props) => <Wolfe {...props} />} />
          <Route path="/channel" render={(props) => <Channel {...props} />} />
          <Route path="/gartley" render={(props) => <Gartley {...props} />} />
          <Route path="/bat" render={(props) => <Bat {...props} />} />
          <Route
            path="/butterfly"
            render={(props) => <Butterfly {...props} />}
          />
          <Route path="/crab" render={(props) => <Crab {...props} />} />
          <Route path="/cypher" render={(props) => <Cypher {...props} />} />
          <Route path="/abcd" render={(props) => <Abcd {...props} />} />
          <Route
            path="/trendline"
            render={(props) => <Trendline {...props} />}
          />
          <Route path="/triangle" render={(props) => <Triangle {...props} />} />
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
