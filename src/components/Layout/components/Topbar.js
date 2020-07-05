import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  withStyles,
  Hidden,
  Switch,
  Fade,
  Typography,
  Paper,
} from "@material-ui/core";
import { Link, IconButton } from "gatsby-theme-material-ui";
import { motion } from "framer-motion";
import { Logo } from "../../GraphQLImages";
import PropTypes from "prop-types";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CodeIcon from "@material-ui/icons/Code";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import topbarStyles from "../../../styles/topbarStyles";

class Topbar extends Component {
  constructor(props) {
    super(props);

    let codeView = false;
    let toggledBefore = false;

    if (typeof localStorage !== "undefined") {
      codeView = JSON.parse(localStorage.getItem("codeView")) || false;
    }

    if (typeof localStorage !== "undefined") {
      toggledBefore =
        JSON.parse(localStorage.getItem("toggledBefore")) || false;
    }

    this.state = { codeView, toggledBefore };
  }

  toggleCodeView = async () => {
    await this.props.toggleCodeView();

    let codeView = false;
    let toggledBefore = false;

    if (typeof localStorage !== "undefined") {
      codeView = JSON.parse(localStorage.getItem("codeView")) || false;
    }

    if (typeof localStorage !== "undefined") {
      toggledBefore =
        JSON.parse(localStorage.getItem("toggledBefore")) || false;
    }

    this.setState({ codeView, toggledBefore });
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <AppBar className={classes.root} position="fixed">
          <Toolbar>
            <Logo className={classes.logo} alt="Logo" />
            <Hidden only={["lg", "xl", "md", "sm"]}>
              <IconButton
                className={classes.mobileButton}
                size="medium"
                component={Link}
                to="/about"
                aria-label="About Me"
              >
                <PersonIcon />
              </IconButton>
              <IconButton
                className={classes.mobileButton}
                size="medium"
                component={Link}
                to="/projects"
                aria-label="Projects"
              >
                <BuildIcon />
              </IconButton>
              <IconButton
                className={classes.mobileButton}
                size="medium"
                component={Link}
                to="/resume"
                aria-label="Resume"
              >
                <FindInPageIcon />
              </IconButton>
            </Hidden>
            <Hidden only={["xs"]}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transformTemplate={(props, transform) =>
                  transform.replace(" translateZ(0)", "")
                }
              >
                <Button
                  variant="outlined"
                  size="medium"
                  className={classes.button}
                  startIcon={<PersonIcon />}
                  component={Link}
                  to="/about"
                >
                  About Me
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transformTemplate={(props, transform) =>
                  transform.replace(" translateZ(0)", "")
                }
              >
                <Button
                  variant="outlined"
                  size="medium"
                  className={classes.button}
                  startIcon={<BuildIcon />}
                  component={Link}
                  to="/projects"
                >
                  Projects
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transformTemplate={(props, transform) =>
                  transform.replace(" translateZ(0)", "")
                }
              >
                <Button
                  variant="outlined"
                  size="medium"
                  className={classes.button}
                  startIcon={<FindInPageIcon />}
                  component={Link}
                  to="/resume"
                >
                  Resume
                </Button>
              </motion.div>
            </Hidden>
            <div className={classes.flexGrow} />
            {!this.props.hideToggle && (
              <React.Fragment>
                <Switch
                  color="default"
                  size="small"
                  inputProps={{ "aria-label": "Toggle Code View" }}
                  onClick={this.toggleCodeView}
                  checked={this.state.codeView}
                  id="codeToggle"
                  className={classes.switch}
                />
                {!this.state.toggledBefore && (
                  <div className={classes.tooltip}>
                    <div className={classes.tipContainer}>
                      <Paper className={classes.tip}>
                        <Typography className={classes.tipText} variant="body1">
                          Click to toggle code view!
                        </Typography>
                      </Paper>
                    </div>
                    <div className={classes.arrowContainer}>
                      <div className={classes.arrowUp}></div>
                    </div>
                  </div>
                )}
                <Fade
                  in={!this.state.codeView}
                  timeout={0}
                  style={{
                    display: this.state.codeView ? "none" : "block",
                  }}
                >
                  <CropOriginalIcon
                    fontSize="large"
                    className={classes.codeButton}
                  />
                </Fade>
                <Fade
                  in={this.state.codeView}
                  timeout={0}
                  style={{
                    display: !this.state.codeView ? "none" : "block",
                  }}
                >
                  <CodeIcon fontSize="large" className={classes.codeButton} />
                </Fade>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </React.Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
};

export default withStyles(topbarStyles)(Topbar);
