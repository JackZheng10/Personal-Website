import React, { Component } from "react";
import { withStyles, Grid, Typography, Hidden } from "@material-ui/core";
import { Link, IconButton } from "gatsby-theme-material-ui";
import { GH, LI, Email } from "../../GraphQLImages";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import footerStyles from "../../../styles/footerStyles";

class Footer extends Component {
  redirectGH = () => {
    if (typeof window !== "undefined") {
      window.open("https://github.com/JackZheng10");
    }
  };

  redirectLI = () => {
    if (typeof window !== "undefined") {
      window.open("https://www.linkedin.com/in/jackzheng10/");
    }
  };

  redirectEmail = () => {
    if (typeof window !== "undefined") {
      window.open("mailto:jackzheng10@yahoo.com", "_self");
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
                  <Typography variant="h5" className={classes.message}>
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
                    <IconButton
                      className={classes.mobileButton}
                      onClick={this.redirectGH}
                      aria-label="GitHub"
                    >
                      <GitHubIcon
                        fontSize="large"
                        className={classes.GHMobile}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      className={classes.mobileButton}
                      onClick={this.redirectLI}
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon
                        fontSize="large"
                        className={classes.LIMobile}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      className={classes.mobileButton}
                      onClick={this.redirectEmail}
                      aria-label="Email"
                    >
                      <EmailIcon
                        fontSize="large"
                        className={classes.emailMobile}
                      />
                    </IconButton>
                  </Grid>
                </Hidden>
                <Hidden only={["xs"]}>
                  <Grid item>
                    <a
                      href="https://github.com/JackZheng10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GH className={classes.button} alt="GitHub" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.linkedin.com/in/jackzheng10/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LI className={classes.button} alt="LinkedIn" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="mailto:jackzheng10@yahoo.com">
                      <Email className={classes.button} alt="Email" />
                    </a>
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
                    Created by me with{" "}
                    <span role="img" aria-label="heart-emoji">
                      ❤️
                    </span>
                    !{" "}
                    <Link
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
