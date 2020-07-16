import React from "react";
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginAndRegistry from "./pages/LoginAndRegistry";
import PrivateRouter from "./components/PrivateRouter";
import Login from "./pages/LoginAndRegistry/Login";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return (
                  localStorage.getItem('token') ? <Home/> : <LoginAndRegistry />
                )
              }}
            ></Route>
            <PrivateRouter path="/home" component={Home}></PrivateRouter>
          </Switch>
        </Router>
      </div>
    );
  }
}
