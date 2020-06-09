import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Topbar from "./components/components/Topbar";
import Footer from "./components/components/Footer";

//todo: themeprovider?

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route path="/">
            <Redirect to="/about" />
          </Route>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
