import React from "react";
import { Helmet } from "react-helmet";
import Particles from "react-particles-js";
import "./src/styles/particlesStyles.css";

function Wrapper(props) {
  return (
    <React.StrictMode>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Jack Zheng</title>
        <link rel="canonical" href="https://jackzheng.dev/" />
      </Helmet>
      <Particles
        params={{
          background: {
            color: {
              value: "#F5F1ED",
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
              value: "#63C1FF",
            },
            links: {
              color: {
                value: "#63C1FF",
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
      {props.children}
    </React.StrictMode>
  );
}

export const wrapPageElement = ({ element }) => <Wrapper>{element}</Wrapper>;
