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
  state = { currentProject: 0 };

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
          <Grid item>
            <div style={{ overflow: "hidden" }}>
              <Slide
                in={this.state.currentProject === 0}
                direction="left"
                timeout={2000}
                style={{
                  display: !(this.state.currentProject === 0)
                    ? "none"
                    : "block",
                  transitionDelay:
                    this.state.currentProject === 0 ? "500ms" : "0ms",
                }}
              >
                <div>
                  <ProjectCard title="P1" />
                </div>
              </Slide>
              <Slide
                in={this.state.currentProject === 1}
                direction="left"
                timeout={2000}
                style={{
                  display: !(this.state.currentProject === 1)
                    ? "none"
                    : "block",
                  transitionDelay:
                    this.state.currentProject === 1 ? "500ms" : "0ms",
                }}
              >
                <div>
                  <ProjectCard title="P2" />
                </div>
              </Slide>
            </div>
          </Grid>
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
