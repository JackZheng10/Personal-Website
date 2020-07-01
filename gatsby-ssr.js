/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { StylesProvider } from "@material-ui/styles";
import theme from "./src/styles/theme";
import "./src/styles/particlesStyles.css";

//testing
import Particles from "react-particles-js";

function Wrapper(props) {
  return (
    <React.StrictMode>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jack Zheng</title>
        <link rel="canonical" href="https://jackzheng.dev/" />
      </Helmet>
      <Particles
        params={{
          background: {
            color: {
              value: "#f5f1ed",
            },
          },
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 5,
            },
            color: {
              value: "rgb(0, 153, 255)",
            },
            links: {
              color: {
                value: "rgb(0, 153, 255)",
              },
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onhover: {
                enable: false,
              },
            },
          },
        }}
        id="particlesBG"
      />
      {/* <ThemeProvider theme={theme}>
        <StylesProvider injectFirst> */}
      <CssBaseline />
      {props.children}
      {/* </StylesProvider>
      </ThemeProvider> */}
    </React.StrictMode>
  );
}

export const wrapRootElement = ({ element }) => <Wrapper>{element}</Wrapper>;
