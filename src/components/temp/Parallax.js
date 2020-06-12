import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Particles from "react-particles-js";
import parllaxStyles from "./parallaxStyles";
/*
npm i react-particle-image
npm install react-particles-js
*/

function Parallax(props) {
  const classes = props.classes;

  return (
    <React.Fragment>
      <h1>parallax test</h1>
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </React.Fragment>
  );
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(parllaxStyles)(Parallax);
