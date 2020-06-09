import React, { Component } from "react";
import { Grid, Typography, withStyles, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import VizSensor from "react-visibility-sensor";
import AboutCard from "./components/AboutCard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AboutPic from "../images/AboutPic.png";
import aboutStyles from "../styles/aboutStyles";

const cron = require("node-cron");

// var task = cron.schedule("2 * * * * *", () => {
//   console.log("will execute every other second until stopped");
// });

// task.stop();

//todo: test on mobile: when small enough, change the topbar buttons to just iconbuttons + resize bottom images as they cause bleedingnpm s

class About extends Component {
  state = {
    showGreeting: false,
    showPic: false,
    showBio: false,
    showLearnMore: false,
    showArrow: false,
    showCard1: false,
    showCard2: false,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showGreeting: true });
    }, 500);

    setTimeout(() => {
      this.setState({ showPic: true });
    }, 2000);

    setTimeout(() => {
      this.setState({ showBio: true });
    }, 2000);

    setTimeout(() => {
      this.setState({ showLearnMore: true });
    }, 3000);

    setTimeout(() => {
      cron.schedule("*/1 * * * * *", () => {
        this.setState({ showArrow: !this.state.showArrow });
      });
    }, 4000);
  };

  renderAboutCards = (isVisible, number) => {
    this.setState({ ["showCard" + number]: isVisible });
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <br />
        <br />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Fade in={this.state.showGreeting} timeout={3000}>
              <Typography variant="h3" className={classes.greeting}>
                Hey there, I'm Jack Zheng
              </Typography>
            </Fade>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Fade in={this.state.showPic} timeout={3000}>
              <img src={AboutPic} alt="Profile Pic" />
            </Fade>
          </Grid>
          <Grid item>
            <Fade in={this.state.showBio} timeout={3000}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h4">Computer Science Student</Typography>
                <Typography variant="h6">
                  University of Florida, Class of 2022
                </Typography>
              </div>
            </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Fade in={this.state.showLearnMore} timeout={3000}>
              <Typography variant="h4" className={classes.greeting}>
                Learn more about me
              </Typography>
            </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Fade in={this.state.showArrow} timeout={1000}>
              <KeyboardArrowDownIcon fontSize="large" />
            </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <VizSensor
            onChange={(isVisible) => {
              this.renderAboutCards(isVisible, 1);
            }}
          >
            <Grid item>
              <Fade in={this.state.showCard1} timeout={2000}>
                <div>
                  <AboutCard />
                </div>
              </Fade>
            </Grid>
          </VizSensor>
          <VizSensor
            onChange={(isVisible) => {
              this.renderAboutCards(isVisible, 2);
            }}
          >
            <Grid item>
              <Fade in={this.state.showCard2} timeout={2000}>
                <div>
                  <AboutCard />
                </div>
              </Fade>
            </Grid>
          </VizSensor>
        </Grid>

        <br />
        <br />
      </React.Fragment>
    );
  }
}

About.propTypes = {
  className: PropTypes.string,
};

export default withStyles(aboutStyles)(About);
