/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React, { Component } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
// import { StylesProvider } from "@material-ui/styles";
import Topbar from "./src/components/Topbar";
import Footer from "./src/components/Footer";
import theme from "./src/styles/theme";
import "./src/styles/particlesStyles.css";

//testing
import Particles from "react-particles-js";

//todo: make footer float to bottom. dont want the page to have to be long
//todo: make sure there aren't unecessary class components. be impressive man
//todo: make footer stick to bottom, but footer + main is minheight 100vh. doesnt account resize. try window event listener
//todo: darkmode?
//todo: vis sensor on arrows? keep non-vis on main titles
//todo: port to gatsby?
//todo: {/*find better solution to sticky footer - will not account for window resizing since not re-rendered*/}
//todo: work on cleaning up unecessary styles/code
//todo: !!!FIX FOUC (flash of unstyled content). solutions available for gatsby deployment.
//todo: !!!with gatsby transfer, the code toggle button doesn't work

function Wrapper(props) {
  return (
    <React.StrictMode>
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
      <ThemeProvider theme={theme}>
        {/* <StylesProvider injectFirst> */}
        <CssBaseline />

        {props.children}

        {/* </StylesProvider> */}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export const wrapPageElement = ({ element }) => <Wrapper>{element}</Wrapper>;
