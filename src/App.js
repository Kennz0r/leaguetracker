import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import React, { Component } from "react";
import Players from "./Players";
import Home from "./Home";
import Items from "./Items";
import Champions from "./Champions";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/home" exact component={withRouter(Home)} />
            <Route path="/players" component={withRouter(Players)} />
            <Route path="/champions" component={withRouter(Champions)} />
            <Route path="/items" component={withRouter(Items)} />
            <Route path="/*" component={withRouter(Home)} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
