import React, { Component } from "react";
import {
  Fade,
  withStyles,
  Grid,
  Typography,
  //   Card,
  //   CardContent,
  //   Divider,
  //   CardActions,
} from "@material-ui/core";
import PropTypes from "prop-types";
import projectCardStyles from "../../../styles/projectCardStyles";

class ProjectsCard extends Component {
  render() {
    const classes = this.props.classes;

    return <h1>card</h1>;
  }
}

ProjectsCard.propTypes = {
  className: PropTypes.string,
};

export default withStyles(projectCardStyles)(ProjectsCard);
