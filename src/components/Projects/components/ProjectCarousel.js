import React, { Component } from "react";
import {
  Slide,
  withStyles,
  Grid,
  Typography,
  Button,
  Fade,
} from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";

class ProjectCarousel extends Component {
  state = { currentProject: 0 };

  handleNextProject = () => {
    this.setState({ currentProject: this.state.currentProject + 1 });
  };

  handlePrevProject = () => {
    this.setState({ currentProject: this.state.currentProject - 1 });
  };

  render() {
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
            <Button onClick={this.handlePrevProject}>BACK</Button>
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
            <Button onClick={this.handleNextProject}>FORWARD</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ProjectCarousel;
