import React from "react";
import { Link } from "gatsby";
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
  Paper,
  Grid,
} from "@material-ui/core";
import { motion } from "framer-motion";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CodeIcon from "@material-ui/icons/Code";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import topbarStyles from "../../../styles/topbarStyles";

//todo: maybe indicator for which page youre on, just extract from path
//todo: maybe change when mobile buttons appear. when vertical view starts @750. probably use fade since hidden doesnt have a true/false
//todo: eh style the buttons better
//todo: maybe dont fade toggle icon in since will fade on every page/refresh

function Topbar(props) {
  let codeView = false;

  if (typeof localStorage !== "undefined") {
    codeView = JSON.parse(localStorage.getItem("codeView")) || false;
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
          {/* <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ backgroundColor: "red" }}
          >
            <Grid item> */}
          <Switch
            color="default"
            size="small"
            onChange={props.toggleCodeView}
            checked={codeView}
          />
          {/* </Grid>
            <Grid item> */}
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
          {/* </Grid>
          </Grid> */}
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
