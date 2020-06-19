import React, { Component } from "react";
import {
  Slide,
  withStyles,
  Grid,
  Typography,
  Button,
  Fade,
  IconButton,
} from "@material-ui/core";
import PropTypes from "prop-types";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ProjectCard from "../components/ProjectCard";
import projectCarouselStyles from "../../../styles/projectCarouselStyles";

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

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <IconButton
              onClick={this.handlePrevProject}
              className={classes.button}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>{this.renderProjectCards()}</Grid>
          <Grid item>
            <IconButton
              onClick={this.handleNextProject}
              className={classes.button}
            >
              <ChevronRightIcon fontSize="large" />
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

export default withStyles(projectCarouselStyles)(ProjectCarousel);