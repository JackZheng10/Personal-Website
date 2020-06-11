import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Topbar from "./components/components/Topbar";
import Footer from "./components/components/Footer";

import CodeTest from "./components/CodeViewTest";
import TabbedCodeTest from "./components/components/TabbedCodeView";

//todo: themeprovider?
//todo: make footer float to bottom. dont want the page to have to be long

class App extends Component {
  state = { aboutCodeView: false, testCodeView: false };

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
          <Route
            exact
            path="/about"
            render={() => <About viewCode={this.state.aboutCodeView} />}
          />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/testTab" component={TabbedCodeTest} />
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
