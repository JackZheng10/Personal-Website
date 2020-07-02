import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  withStyles,
  Hidden,
  Switch,
  Fade,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Link, IconButton } from "gatsby-theme-material-ui";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CodeIcon from "@material-ui/icons/Code";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import topbarStyles from "../../../styles/topbarStyles";

//todo: maybe indicator for which page youre on, just extract from path

function Topbar(props) {
  let codeView = false;
  let toggledBefore = false;

  if (typeof localStorage !== "undefined") {
    codeView = JSON.parse(localStorage.getItem("codeView")) || false;
  }

  if (typeof localStorage !== "undefined") {
    toggledBefore = JSON.parse(localStorage.getItem("toggledBefore")) || false;
  }

  const classes = props.classes;

  return (
    <React.Fragment>
      <AppBar className={classes.root} position="fixed">
        <Toolbar>
          <Hidden only={["lg", "xl", "md", "sm"]}>
            <IconButton
              className={classes.mobileButton}
              size="small"
              component={Link}
              to="/about"
            >
              <PersonIcon />
            </IconButton>
            <IconButton
              className={classes.mobileButton}
              size="small"
              component={Link}
              to="/projects"
            >
              <BuildIcon />
            </IconButton>
            <IconButton
              className={classes.mobileButton}
              size="small"
              component={Link}
              to="/resume"
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
                color="primary"
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
                color="primary"
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
                color="primary"
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
          {!props.hideToggle && (
            <React.Fragment>
              <Tooltip
                open={!toggledBefore}
                title={
                  <Typography variant="body1">
                    Click to toggle code view!
                  </Typography>
                }
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                arrow
              >
                <Switch
                  color="default"
                  size="small"
                  onChange={props.toggleCodeView}
                  checked={codeView}
                />
              </Tooltip>
              <Fade
                in={!codeView}
                timeout={0}
                style={{
                  display: codeView ? "none" : "block",
                }}
              >
                <CropOriginalIcon
                  fontSize="large"
                  className={classes.codeButton}
                />
              </Fade>
              <Fade
                in={codeView}
                timeout={0}
                style={{
                  display: !codeView ? "none" : "block",
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

Topbar.propTypes = {
  className: PropTypes.string,
};

export default withStyles(topbarStyles)(Topbar);
