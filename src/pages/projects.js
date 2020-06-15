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
import Layout from "../components/layout";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import projectsStyles from "../styles/projectsStyles";

const cron = require("node-cron");

//todo: give placeholder height for loading element so the page doesnt collapse randomly on refresh

class Projects extends Component {
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
      <Layout>
        <br />
        <br />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Fade in={this.state.showIntro} timeout={3000}>
                  <Typography variant="h3" className={classes.greeting}>
                    Explore some of my projects
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
                <h1>projects go here</h1>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
      </Layout>
    );
  }
}

Projects.propTypes = {
  className: PropTypes.string,
};

export default withStyles(projectsStyles)(Projects);
