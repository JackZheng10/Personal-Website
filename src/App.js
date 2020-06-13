import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import About from "./components/About/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Topbar from "./components/components/Topbar";
import Footer from "./components/components/Footer";
import TabbedCodeTest from "./components/components/TabbedCodeView";
import ParallaxTest from "./components/temp/Parallax";
import theme from "./theme";
import "./particlesStyles.css";

//testing
import Particles from "react-particles-js";

//todo: make footer float to bottom. dont want the page to have to be long
//todo: make sure there aren't unecessary class components. be impressive man
//todo: make footer stick to bottom, but footer + main is minheight 100vh. doesnt account resize. try window event listener
//todo: darkmode?
//todo: vis sensor on arrows? keep non-vis on main titles
//todo: port to gatsby?
//todo: {/*find better solution to sticky footer - will not account for window resizing since not re-rendered*/}

class App extends Component {
  state = { codeView: false };

  toggleCodeView = (event) => {
    //BRO IT'S A STRING AHHH I DIDN'T KNOW
    localStorage.setItem("codeView", event.target.checked);

    this.setState({ codeView: event.target.checked });
  };

  render() {
    return (
      <React.Fragment>
        <Particles
          params={{
            particles: {
              size: {
                value: 5,
              },
              color: {
                value: "#0ff",
              },
              lineLinked: {
                distance: 100,
              },
              number: {
                value: 100,
              },
            },
          }}
          id="particlesBG"
        />
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Topbar toggleCodeView={this.toggleCodeView} />

          {/* <div
            style={{
              // backgroundImage: `url(${Moon})`,
              backgroundColor: "rgb(51, 174, 255)",
              // minHeight: window.innerHeight - 186.89,
              minHeight: "100vh", //might be crap
            }}
            
          > */}

          <Switch>
            <Route
              exact
              path="/about"
              render={() => <About viewCode={this.state.aboutCodeView} />}
            />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/testTab" component={TabbedCodeTest} />
            <Route exact path="/testPar" component={ParallaxTest} />
            <Route path="/">
              <Redirect to="/about" />
            </Route>
          </Switch>
          {/* </div> */}
          <Footer />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
