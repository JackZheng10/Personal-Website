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
import ProjectCard from "./components/ProjectCard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import projectsViewStyles from "../../styles/projectsViewStyles";

const cron = require("node-cron");

//todo: use blur on about cards before they fade in? keep visible after first time or this blur visible on screen all the time
//todo: maybe change font. this is default wordpress font so ppl might think i used wordpress :(
//todo: fix FOUC: https://github.com/gatsbyjs/gatsby/issues/15097
//todo: fix particlesBG being clumped when screen resizes
//

class ProjectsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showIntro: false,
      showArrow: false,
    };

    this.flashArrow = cron.schedule(
      "*/1 * * * * *",
      () => {
        this.setState({ showArrow: !this.state.showArrow });
      },
      { scheduled: false }
    );
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showIntro: true });
    }, 1000);

    setTimeout(() => {
      this.flashArrow.start();
    }, 2000);
  };

  render() {
    const classes = this.props.classes;

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <Fade in={this.state.showIntro} timeout={3000}>
                <Typography variant="h3" className={classes.greeting}>
                  Explore some of the projects I've built
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Fade in={this.state.showArrow} timeout={990}>
                <KeyboardArrowDownIcon fontSize="large" />
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid item>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <ProjectCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ProjectsView.propTypes = {
  className: PropTypes.string,
};

export default withStyles(projectsViewStyles)(ProjectsView);
