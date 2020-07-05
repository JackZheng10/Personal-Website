import React, { Component } from "react";
import { Fade, Button, withStyles, Grid, Typography } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import {
  CodeViewCode,
  Layout,
  Topbar,
  Footer,
  GraphQLImages,
} from "../codeFiles/CommonFiles";
import { AboutView, AboutCard } from "../codeFiles/About";
import { ProjectsView, ProjectCard } from "../codeFiles/Projects";
import { ResumeView } from "../codeFiles/Resume";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import codeViewStyles from "../styles/codeViewStyles";

const cron = require("node-cron");

const animations = {
  slide: { y: [50, 0], opacity: [0, 0.5, 1] },
  hidden: { opacity: 0 },
};

const commonFiles = [
  { name: "CodeView.js", code: CodeViewCode },
  { name: "Layout.js", code: Layout },
  { name: "Topbar.js", code: Topbar },
  { name: "Footer.js", code: Footer },
  { name: "GraphQLImages.js", code: GraphQLImages },
];

const aboutFiles = [
  { name: "AboutView.js", code: AboutView },
  { name: "AboutCard.js", code: AboutCard },
  ...commonFiles,
];

const projectsFiles = [
  { name: "ProjectsView.js", code: ProjectsView },
  { name: "ProjectCard.js", code: ProjectCard },
  ...commonFiles,
];

const resumeFiles = [
  { name: "ResumeView.js", code: ResumeView },
  ...commonFiles,
];

class CodeView extends Component {
  constructor(props) {
    super(props);

    // if (typeof window !== "undefined") {
    //   window.scrollTo(0, 0);
    // }

    let files = [];

    if (typeof window !== "undefined") {
      let page = window.location.pathname.substring(1);
      files = this.getFiles(page);
    }

    this.state = {
      showArrow: false,
      files: files,
      currentCode: files[0].code,
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
      this.flashArrow.start();
    }, 1000);
  };

  getFiles = (page) => {
    if (page === "about" || page === "about/") {
      return aboutFiles;
    } else if (page === "projects" || page === "projects/") {
      return projectsFiles;
    } else if (page === "resume" || page === "resume/") {
      return resumeFiles;
    }
  };

  setFile = (code) => {
    this.setState({ currentCode: code });
  };

  handleSelectedBG = (code) => {
    if (this.state.currentCode === code) {
      return "#0099FF";
    } else {
      return "white";
    }
  };

  handleSelectedText = (code) => {
    if (this.state.currentCode === code) {
      return "white";
    } else {
      return "#0099FF";
    }
  };

  renderFileButtons = (classes) => {
    return this.state.files.map((file, index) => {
      return (
        <Grid item>
          <Button
            variant="contained"
            size="medium"
            aria-label={file.name}
            key={index}
            className={classes.button}
            style={{
              backgroundColor: this.handleSelectedBG(file.code),
              color: this.handleSelectedText(file.code),
            }}
            onClick={() => {
              this.setFile(file.code);
            }}
          >
            {file.name}
          </Button>
        </Grid>
      );
    });
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
                <motion.div
                  variants={animations}
                  animate="slide"
                  initial="hidden"
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                >
                  <Typography variant="h3" className={classes.greeting}>
                    Here's (most of) the code that makes this page work
                  </Typography>
                </motion.div>
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
            <motion.div
              variants={animations}
              animate="slide"
              initial="hidden"
              transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
            >
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="center"
              >
                {this.renderFileButtons(classes)}
              </Grid>
            </motion.div>
          </Grid>
          <div style={{ width: "90%" }}>
            <motion.div
              variants={animations}
              animate="slide"
              initial="hidden"
              transition={{ delay: 3, duration: 1, ease: "easeOut" }}
            >
              <SyntaxHighlighter language="jsx" style={okaidia}>
                {this.state.currentCode}
              </SyntaxHighlighter>
            </motion.div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
}

CodeView.propTypes = {
  className: PropTypes.string,
};

export default withStyles(codeViewStyles)(CodeView);
