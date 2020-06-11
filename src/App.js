import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Topbar from "./components/components/Topbar";
import Footer from "./components/components/Footer";

import CodeTest from "./components/CodeViewTest";

//todo: themeprovider?

class App extends Component {
  state = { testCodeView: false };

  toggleCodeView = (page) => {
    console.log("state: " + page + "CodeView");
    console.log("before: " + this.state.testCodeView);

    this.setState(
      (prevState) => ({
        [page + "CodeView"]: !prevState[page + "CodeView"],
      }),
      () => {
        console.log("after: " + this.state.testCodeView);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <Topbar toggleCodeView={this.toggleCodeView} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route
            exact
            path="/test"
            render={() => <CodeTest viewCode={this.state.testCodeView} />}
          />
          <Route path="/">
            <Redirect to="/about" />
          </Route>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
