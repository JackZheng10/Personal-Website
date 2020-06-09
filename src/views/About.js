import React, { Component } from "react";
import { Grid, Typography, withStyles, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import AboutPic from "../images/AboutPic.png";
import aboutStyles from "../styles/aboutStyles";

class About extends Component {
  state = { showGreeting: false, showPic: false, showBio: false };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showGreeting: true });
    }, 500);

    setTimeout(() => {
      this.setState({ showPic: true });
    }, 2000);

    setTimeout(() => {
      this.setState({ showBio: true });
    }, 3000);
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
              <Typography variant="h3" className={classes.name}>
                Hey, I'm Jack Zheng
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
                <Typography variant="h4" className={classes.name}>
                  Computer Science Student
                </Typography>
                <Typography variant="h6" className={classes.name}>
                  University of Florida, Class of 2022
                </Typography>
              </div>
            </Fade>
          </Grid>
        </Grid>
        <div style={{ height: 500 }}></div>
      </React.Fragment>
    );
  }
}

About.propTypes = {
  className: PropTypes.string,
};

export default withStyles(aboutStyles)(About);
