import React, { Component } from "react";
import {
  Slide,
  withStyles,
  Grid,
  Typography,
  Button,
  Fade,
} from "@material-ui/core";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ProjectCarousel from "./components/ProjectCarousel";
import ProjectCard from "./components/ProjectCard";
import testImage from "../../images/testImage.jpg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import projectsViewStyles from "../../styles/projectsViewStyles";

const cron = require("node-cron");

const animations = {
  slide: { y: [50, 0], opacity: [0, 0.5, 1] },
  hidden: { opacity: 0 },
};

//todo: use blur on about cards before they fade in? keep visible after first time or this blur visible on screen all the time
//todo: maybe change font. this is default wordpress font so ppl might think i used wordpress :(
//todo: fix FOUC: https://github.com/gatsbyjs/gatsby/issues/15097
//todo: fix particlesBG being clumped when screen resizes
//todo: responsive title text
//todo: margin top and gap between arrow responsive?

class ProjectsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showIntro: false,
      showArrow: false,
      showProjects: false,
    };

    this.flashArrow = cron.schedule(
      "*/1 * * * * *",
      () => {
        this.setState({ showArrow: !this.state.showArrow });
      },
      { scheduled: false }
    );
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showIntro: true });
    }, 500);

    setTimeout(() => {
      this.flashArrow.start();
    }, 1500);

    setTimeout(() => {
      this.setState({ showProjects: true });
    }, 2500);
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                {/* <Fade in={this.state.showIntro} timeout={3000}> */}
                <motion.div
                  variants={animations}
                  animate="slide"
                  initial="hidden"
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                >
                  <Typography variant="h3" className={classes.greeting}>
                    Explore some of the projects I've worked on
                  </Typography>
                </motion.div>
                {/* </Fade> */}
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
              <Grid item>
                <Fade in={this.state.showArrow} timeout={990}>
                  <KeyboardArrowDownIcon fontSize="large" />
                </Fade>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid item>
            {/* <Fade in={this.state.showProjects} timeout={3000}> */}
            <div style={{ padding: 16 }}>
              <Grid
                container
                spacing={4}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <motion.div
                    variants={animations}
                    animate="slide"
                    initial="hidden"
                    transition={{ delay: 3, duration: 1, ease: "easeOut" }}
                  >
                    <ProjectCard
                      title="Laundr Web App"
                      description="Placeholder"
                      images={[testImage, testImage, testImage, testImage]}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    variants={animations}
                    animate="slide"
                    initial="hidden"
                    transition={{ delay: 3.5, duration: 1, ease: "easeOut" }}
                  >
                    <ProjectCard
                      title="SnapScan"
                      description="Placeholder"
                      images={[testImage, testImage]}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    variants={animations}
                    animate="slide"
                    initial="hidden"
                    transition={{ delay: 4, duration: 1, ease: "easeOut" }}
                  >
                    <ProjectCard
                      title="Gonzalo Law Client Portal"
                      description="Placeholder"
                      images={[testImage, testImage]}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    variants={animations}
                    animate="slide"
                    initial="hidden"
                    transition={{ delay: 4.5, duration: 1, ease: "easeOut" }}
                  >
                    <ProjectCard
                      title="Eat Me"
                      description="Placeholder"
                      images={[testImage, testImage]}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    variants={animations}
                    animate="slide"
                    initial="hidden"
                    transition={{ delay: 5, duration: 1, ease: "easeOut" }}
                  >
                    <ProjectCard
                      title="Portfolio"
                      description="The website you're on right now!"
                      images={[testImage, testImage]}
                    />
                  </motion.div>
                </Grid>
              </Grid>
            </div>
            {/* </Fade> */}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

ProjectsView.propTypes = {
  className: PropTypes.string,
};

export default withStyles(projectsViewStyles)(ProjectsView);
