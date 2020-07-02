import React, { Component } from "react";
import { Fade, Button, withStyles, Grid, Typography } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { About as AboutCode } from "../codeFiles/About/About";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import tabbedCodeViewStyles from "../styles/tabbedCodeViewStyles";

//todo: do the code file exports like the material dashboard ppl did, just export out of the file!

const cron = require("node-cron");

const animations = {
  slide: { y: [50, 0], opacity: [0, 0.5, 1] },
  hidden: { opacity: 0 },
};

const code = `const b = "Five"
const c = "Six";
console.log("Seven")`;

const code2 = `const b = "Five"
const c = "Six";
console.log("Seven")
const b = "Five"
const c = "Six";
console.log("Seven")`;

const commonFiles = [
  { name: "TabbedCodeView.js", code: code },
  { name: "Topbar.js", code: code },
  { name: "Footer.js", code: code },
  { name: "App.js", code: code },
  { name: "topbarStyles.js", code: code },
  { name: "footerStyles.js", code: code },
];

const aboutFiles = [
  { name: "About.js", code: code },
  { name: "AboutCard.js", code: code2 },
  { name: "aboutStyles.js", code: code },
  { name: "aboutCardStyles.js", code: code },
  ...commonFiles,
];

const projectFiles = [{ name: "Projects.js", code: AboutCode }, ...commonFiles];

const resumeFiles = [{ name: "Resume.js", code: AboutCode }, ...commonFiles];

class TabbedCodeView extends Component {
  constructor(props) {
    super(props);

    let files = [];

    if (typeof window !== `undefined`) {
      let page = window.location.pathname.substring(1);
      files = this.getFiles(page);
    }

    this.state = {
      showIntro: false,
      showArrow: false,
      showButtons: false,
      showCode: false,

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
      this.setState({ showIntro: true });
    }, 1000);

    setTimeout(() => {
      this.flashArrow.start();
    }, 1000);

    setTimeout(() => {
      this.setState({ showButtons: true });
    }, 3000);

    setTimeout(() => {
      this.setState({ showCode: true });
    }, 3000);
  };

  getFiles = (page) => {
    switch (page) {
      case "testTab":
        return aboutFiles;
      case "about":
        return aboutFiles;
      case "projects":
        return projectFiles;
      case "resume":
        return resumeFiles;
      default:
        return commonFiles;
    }
  };

  setFile = (code) => {
    this.setState({ currentCode: code });
  };

  handleSelectedBG = (code) => {
    if (this.state.currentCode === code) {
      return "rgb(0, 153, 255)";
    } else {
      return "white";
    }
  };

  handleSelectedText = (code) => {
    if (this.state.currentCode === code) {
      return "white";
    } else {
      return "rgb(0, 153, 255)";
    }
  };

  renderFileButtons = (classes) => {
    return this.state.files.map((file, index) => {
      return (
        <Grid item>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transformTemplate={(props, transform) =>
              transform.replace(" translateZ(0)", "")
            }
          >
            <Button
              variant="contained"
              size="medium"
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
          </motion.div>
        </Grid>
      );
    });
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        {/* <FlareComponent
          width={200}
          height={200}
          animationName="coding"
          file={Success}
          width={500}
          height={500}
        /> */}
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
                    Here's (most of) the code that makes this page work
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
            {/* <Fade in={this.state.showButtons} timeout={3000}> */}
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
            {/* </Fade> */}
          </Grid>
          {/* <Fade in={this.state.showCode} timeout={3000}> */}

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

          {/* </Fade> */}
        </Grid>
      </React.Fragment>
    );
  }
}

TabbedCodeView.propTypes = {
  className: PropTypes.string,
};

export default withStyles(tabbedCodeViewStyles)(TabbedCodeView);
