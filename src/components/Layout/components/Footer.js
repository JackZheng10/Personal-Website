import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  Typography,
  Link,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { GitHub, LinkedIn, Email } from "../../../images/Footer";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import footerStyles from "../../../styles/footerStyles";

//todo: use icons when on mobile for footer images? or just resize.

class Footer extends Component {
  redirectGH = () => {
    if (typeof window !== `undefined`) {
      window.open("https://github.com/JackZheng10");
    }
  };

  redirectLI = () => {
    if (typeof window !== `undefined`) {
      window.open("https://www.linkedin.com/in/jackzheng10/");
    }
  };

  redirectEmail = () => {
    if (typeof window !== `undefined`) {
      window.open("mailto:jackzheng10@yahoo.com");
    }
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <div className={classes.footer}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h5" className={classes.name}>
                    Connect with me.
                  </Typography>
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
                <Hidden only={["lg", "xl", "md", "sm"]}>
                  <Grid item>
                    <IconButton onClick={this.redirectGH}>
                      <GitHubIcon
                        fontSize="large"
                        className={classes.GHMobile}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={this.redirectLI}>
                      <LinkedInIcon
                        fontSize="large"
                        className={classes.LIMobile}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={this.redirectEmail}>
                      <EmailIcon
                        fontSize="large"
                        className={classes.emailMobile}
                      />
                    </IconButton>
                  </Grid>
                </Hidden>
                <Hidden only={["xs"]}>
                  <Grid item>
                    <img
                      src={GitHub}
                      className={classes.GH}
                      alt="GitHub Logo"
                      onClick={this.redirectGH}
                    />
                    &nbsp;&nbsp;&nbsp;
                  </Grid>
                  <Grid item>
                    <img
                      src={LinkedIn}
                      className={classes.LI}
                      alt="LinkedIn Logo"
                      onClick={this.redirectLI}
                    />
                    &nbsp;&nbsp;&nbsp;
                  </Grid>
                  <Grid item>
                    <img
                      src={Email}
                      className={classes.email}
                      alt="Email Logo"
                      onClick={this.redirectEmail}
                    />
                  </Grid>
                </Hidden>
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
                  <Typography
                    variant="body2"
                    className={classes.centerText}
                    gutterBottom
                  >
                    Created by me with ❤️!{" "}
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
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default withStyles(footerStyles)(Footer);
