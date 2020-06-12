import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Button,
  withStyles,
  IconButton,
  Hidden,
  Switch,
  FormControlLabel,
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

class Topbar extends Component {
  render() {
    const classes = this.props.classes;

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

            <CodeIcon fontSize="large" className={classes.codeButton} />
            <Switch
              color="default"
              size="small"
              onChange={this.props.toggleCodeView}
              checked={JSON.parse(localStorage.getItem("viewCode"))}
            />
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
