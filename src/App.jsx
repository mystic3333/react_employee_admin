import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginAndRegistry from './pages/LoginAndRegistry'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginAndRegistry}></Route>
            <Route exact path="/home" component={Home}></Route>
          </Switch>
        </Router>

      </div>
    );
  }
}
