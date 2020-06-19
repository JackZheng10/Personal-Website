import React, { Component } from "react";
import {
  Slide,
  withStyles,
  Grid,
  Typography,
  Button,
  Fade,
  IconButton,
  withWidth,
} from "@material-ui/core";
import PropTypes from "prop-types";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ProjectCard from "../components/ProjectCard";
import projectCarouselStyles from "../../../styles/projectCarouselStyles";

//todo: add explicit spacing={0} to containers

class ProjectCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = { currentProject: 0, numProjects: this.props.projectCount };
  }

  renderProjectCards = () => {
    return this.props.children.map((child, index) => {
      return (
        <Fade
          in={this.state.currentProject === index}
          timeout={3000}
          style={{
            display: !(this.state.currentProject === index) ? "none" : "block",
          }}
        >
          <div>{child}</div>
        </Fade>
      );
    });
  };

  handleNextProject = () => {
    this.setState({ currentProject: this.state.currentProject + 1 });
  };

  handlePrevProject = () => {
    this.setState({ currentProject: this.state.currentProject - 1 });
  };

  handleXsDirection = () => {
    return this.props.width === "xs" || this.props.width === "sm"
      ? "column"
      : "row";
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <Grid
          container
          spacing={0}
          direction={this.handleXsDirection()}
          justify="center"
          alignItems="center"
        >
          <Grid item className={classes.rowButton}>
            <IconButton
              onClick={this.handlePrevProject}
              className={classes.button}
            >
              <ArrowBackIosOutlinedIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item className={classes.projectCards}>
            {this.renderProjectCards()}
          </Grid>
          <Grid item className={classes.rowButton}>
            <IconButton
              onClick={this.handleNextProject}
              className={classes.button}
            >
              <ArrowForwardIosOutlinedIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item className={classes.columnButtons}>
            <IconButton
              onClick={this.handlePrevProject}
              className={classes.button}
            >
              <ArrowBackIosOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={this.handleNextProject}
              className={classes.button}
            >
              <ArrowForwardIosOutlinedIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

ProjectCarousel.propTypes = {
  className: PropTypes.string,
};

export default withWidth()(withStyles(projectCarouselStyles)(ProjectCarousel));
