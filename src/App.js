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
            background: {
              color: {
                value: "#33aeff",
              },
            },
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 5,
              },
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
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

/*
  params={{
            background: {
              color: {
                value: "#33aeff",
              },
            },
            backgroundMask: {
              cover: {
                color: {
                  value: "#fff",
                },
                opacity: 1,
              },
              enable: false,
            },
            detectRetina: true,
            fpsLimit: 30,
            infection: {
              cure: false,
              delay: 0,
              enable: false,
              infections: 0,
              stages: [],
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onDiv: {
                  elementId: "",
                  enable: false,
                  mode: [],
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  links: {
                    opacity: 1,
                  },
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  speed: 1,
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
              },
            },
            particles: {
              collisions: {
                enable: false,
                mode: "bounce",
              },
              color: {
                value: "#ffffff",
                animation: {
                  enable: false,
                  speed: 1,
                  sync: true,
                },
              },
              links: {
                blink: false,
                color: {
                  value: "#ffffff",
                },
                consent: false,
                distance: 150,
                enable: true,
                opacity: 0.4,
                shadow: {
                  blur: 5,
                  color: {
                    value: "lime",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                },
                width: 1,
                warp: false,
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                direction: "none",
                enable: true,
                noise: {
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                  factor: {
                    horizontal: {
                      value: 50,
                      offset: 0,
                    },
                    vertical: {
                      value: 10,
                      offset: 40000,
                    },
                  },
                },
                outMode: "out",
                random: false,
                speed: 2,
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000",
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                  factor: 1000,
                },
                limit: 0,
                value: 80,
              },
              opacity: {
                animation: {
                  enable: false,
                  minimumValue: 0.1,
                  speed: 1,
                  sync: false,
                },
                random: {
                  enable: false,
                  minimumValue: 1,
                },
                value: 0.5,
              },
              rotate: {
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: "clockwise",
                random: false,
                value: 0,
              },
              shadow: {
                blur: 0,
                color: {
                  value: "#000000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {
                  character: {
                    fill: true,
                    close: true,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400",
                  },
                  char: {
                    fill: true,
                    close: true,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400",
                  },
                  image: {
                    fill: true,
                    close: true,
                    height: 100,
                    replaceColor: false,
                    src:
                      "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                  },
                  images: {
                    fill: true,
                    close: true,
                    height: 100,
                    replaceColor: false,
                    src:
                      "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                  },
                  polygon: {
                    fill: true,
                    close: true,
                    sides: 5,
                  },
                  star: {
                    fill: true,
                    close: true,
                    sides: 5,
                  },
                },
                type: "circle",
              },
              size: {
                animation: {
                  destroy: "none",
                  enable: false,
                  minimumValue: 0.1,
                  speed: 40,
                  startValue: "max",
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 1,
                },
                value: 5,
              },
              stroke: {
                color: {
                  value: "#000000",
                },
                width: 0,
                opacity: 1,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
            },
            pauseOnBlur: true,
          }}
 */
