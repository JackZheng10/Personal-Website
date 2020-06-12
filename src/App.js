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
//todo: use localstorage to persist toggles of code! no need for function here, just access localstorage in the page

class App extends Component {
  state = { codeView: false };

  toggleCodeView = (event) => {
    // console.log("state: " + page + "CodeView");
    // console.log("before: " + this.state.aboutCodeView);

    // this.setState(
    //   (prevState) => ({
    //     [page + "CodeView"]: !prevState[page + "CodeView"],
    //   }),
    //   () => {
    //     console.log("after: " + this.state.aboutCodeView);
    //   }
    // );
    console.log("view code: " + event.target.checked);

    //BRO IT'S A STRING AHHH I DIDN'T KNOW
    localStorage.setItem("viewCode", event.target.checked);

    this.setState({ codeView: event.target.checked });
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
