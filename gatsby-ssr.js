/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
// import { StylesProvider } from "@material-ui/styles";
import theme from "./src/styles/theme";
import "./src/styles/particlesStyles.css";

//testing
import Particles from "react-particles-js";

//fullpage stuff
import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";
import Topbar from "./src/components/Layout/components/Topbar";
import Footer from "./src/components/Layout/components/Footer";
import "react-awesome-slider/dist/styles.css";

function Wrapper(props) {
  let slug;

  if (typeof window !== `undefined`) {
    slug = window.location.pathname.substring(1) || "about";
  }

  // const slug = "about";

  return (
    <React.StrictMode>
      <Provider slug={slug}>
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
          <Topbar />
          {props.children}
          <Footer />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}

export const wrapRootElement = ({ element }) => <Wrapper>{element}</Wrapper>;
