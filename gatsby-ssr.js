/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./src/styles/theme";
import "./src/styles/particlesStyles.css";
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
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export const wrapRootElement = ({ element }) => <Wrapper>{element}</Wrapper>;
