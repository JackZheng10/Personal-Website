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
  Switch,
  Fade,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CodeIcon from "@material-ui/icons/Code";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import topbarStyles from "../../styles/topbarStyles";

//todo: maybe indicator for which page youre on, just extract from path

function Topbar(props) {
  let codeView = JSON.parse(localStorage.getItem("codeView"));

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
          <Switch
            color="default"
            size="small"
            onChange={props.toggleCodeView}
            checked={codeView}
          />
          <Fade
            in={!codeView}
            timeout={3000}
            style={{
              display: codeView ? "none" : "block",
            }}
          >
            <CropOriginalIcon fontSize="large" className={classes.codeButton} />
          </Fade>
          <Fade
            in={codeView}
            timeout={3000}
            style={{
              display: !codeView ? "none" : "block",
            }}
          >
            <CodeIcon fontSize="large" className={classes.codeButton} />
          </Fade>
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
