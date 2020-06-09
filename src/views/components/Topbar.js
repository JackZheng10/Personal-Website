import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Button, withStyles } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import topbarStyles from "../../styles/topbarStyles";

function Topbar(props) {
  const classes = props.classes;

  return (
    <React.Fragment>
      <AppBar className={classes.root} position="fixed">
        <Toolbar>
          <div className={classes.flexGrow} />
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
