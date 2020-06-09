import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./views/About";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import Topbar from "./views/components/Topbar";
import Footer from "./views/components/Footer";

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
