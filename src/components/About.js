import React, { Component } from "react";
import {
  Grid,
  Typography,
  withStyles,
  Fade,
  withWidth,
} from "@material-ui/core";
import PropTypes from "prop-types";
import VizSensor from "react-visibility-sensor";
import AboutCard from "./components/AboutCard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ProfilePic from "../images/ProfilePic.png";
import UFLogo from "../images/UFLogo.jpg";
import DevLogo from "../images/DevLogo.png";
import HockeyLogo from "../images/HockeyLogo.png";
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
    showCard3: false,
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

  handleXsVisible = () => {
    return this.props.width === "xs" ||
      this.props.width === "sm" ||
      this.props.width === "md"
      ? true
      : false;
  };

  handleXsTimeout = (card) => {
    if (
      this.props.width === "xs" ||
      this.props.width === "sm" ||
      this.props.width === "md"
    ) {
      return 2000;
    } else {
      switch (card) {
        case 1:
          return 1000;
        case 2:
          return 2000;
        case 3:
          return 3000;
      }
    }
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
              <img
                src={ProfilePic}
                alt="Profile Pic"
                className={classes.profilePic}
              />
            </Fade>
          </Grid>
          <Grid item>
            <Fade in={this.state.showBio} timeout={3000}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h4">Computer Science Student</Typography>
                <Typography variant="h6">Aspiring Software Engineer</Typography>
              </div>
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
        <br />
        <br />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <VizSensor
            partialVisibility={this.handleXsVisible()}
            onChange={(isVisible) => {
              this.renderAboutCards(isVisible, 1);
            }}
          >
            <Grid item>
              <Fade in={this.state.showCard1} timeout={this.handleXsTimeout(1)}>
                <div>
                  <AboutCard
                    image={UFLogo}
                    title="I am a..."
                    text="I'm a Junior at the University of Florida studying computer science. I was extremely addicted to computers as a kid - and I can say that not much has changed! Above all else, I'm grateful for what I'm learning along the way."
                  />
                </div>
              </Fade>
            </Grid>
          </VizSensor>
          <VizSensor
            partialVisibility={this.handleXsVisible()}
            onChange={(isVisible) => {
              this.renderAboutCards(isVisible, 2);
            }}
          >
            <Grid item>
              <Fade in={this.state.showCard2} timeout={this.handleXsTimeout(2)}>
                <div>
                  <AboutCard
                    image={DevLogo}
                    title="I like to..."
                    text="I like to learn about new technologies and topics, so I spend a lot of time working on personal projects. I'm very interested in full-stack web development, but I've also worked with mobile applications before."
                  />
                </div>
              </Fade>
            </Grid>
          </VizSensor>
          <VizSensor
            partialVisibility={this.handleXsVisible()}
            onChange={(isVisible) => {
              this.renderAboutCards(isVisible, 3);
            }}
          >
            <Grid item>
              <Fade in={this.state.showCard3} timeout={this.handleXsTimeout(3)}>
                <div>
                  <AboutCard
                    image={HockeyLogo}
                    title="In my free time..."
                    text="When I'm not doing anything related to computer science, you'll likely find me at the gym, playing hockey (wherever I can find a rink), or chilling out with some music. Hit me up for some good recommendations. "
                  />
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
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(withStyles(aboutStyles)(About));
