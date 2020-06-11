import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Button,
  withStyles,
  IconButton,
  Hidden,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CodeIcon from "@material-ui/icons/Code";
import topbarStyles from "../../styles/topbarStyles";

/*
click code button = toggle code view:
-have state in App, passdown codeView bool to different pages
-have function in app to change this state, pass down to toolbar and therefore to this button
*/

function Topbar(props) {
  const classes = props.classes;

  return (
    <React.Fragment>
      <AppBar className={classes.root} position="fixed">
        <Toolbar>
          <Hidden only={["md", "lg", "xl"]}>
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
          <Hidden only={["sm", "xs"]}>
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
          </Hidden>
          <div className={classes.flexGrow} />
          <IconButton className={classes.codeButton} size="small">
            <CodeIcon fontSize="large" />
          </IconButton>
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
