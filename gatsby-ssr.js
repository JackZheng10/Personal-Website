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

export const wrapRootElement = ({ element }) => <Wrapper>{element}</Wrapper>;
