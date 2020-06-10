import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Typography, Link } from "@material-ui/core";
import footerStyles from "../../styles/footerStyles";
import GitHubLogo from "../../images/GitHubLogo.png";
import LinkedInLogo from "../../images/LinkedInLogo.png";
import EmailLogo from "../../images/EmailLogo.png";

//todo: fix weird gradients when applying it to footer

class Footer extends Component {
  redirectGH = () => {
    window.open("https://github.com/JackZheng10");
  };

  redirectLI = () => {
    window.open("https://www.linkedin.com/in/jackzheng10/");
  };

  redirectEmail = () => {
    window.open("mailto:jackzheng10@yahoo.com");
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
          className={classes.root}
        >
          <Grid item>
            <Typography variant="h5" className={classes.name}>
              Connect with me
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            <img
              src={GitHubLogo}
              className={classes.GHlogo}
              alt="GitHub Logo"
              onClick={this.redirectGH}
            />
          </Grid>
          <Grid item>
            <img
              src={LinkedInLogo}
              className={classes.LIlogo}
              alt="LinkedIn Logo"
              onClick={this.redirectLI}
            />
          </Grid>
          <Grid item>
            <img
              src={EmailLogo}
              className={classes.emailLogo}
              alt="Email Logo"
              onClick={this.redirectEmail}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            <Typography variant="body2" className={classes.centerText}>
              Created by me!{" "}
              <Link
                color="primary"
                target="_blank"
                rel="noopener"
                href="https://github.com/JackZheng10/Personal-Website"
              >
                Click to view the source code.
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default withStyles(footerStyles)(Footer);
