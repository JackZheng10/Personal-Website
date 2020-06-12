import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import parllaxStyles from "./parallaxStyles";

function Parallax(props) {
  const classes = props.classes;

  return (
    <React.Fragment>
      <h1>parallax test</h1>
    </React.Fragment>
  );
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(parllaxStyles)(Parallax);
