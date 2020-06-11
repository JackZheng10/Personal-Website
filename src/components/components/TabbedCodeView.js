import React, { Component } from "react";
import { Fade, Button, withStyles, Grid, Typography } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vs,
  atomDark,
  prism,
  tomorrow,
  okaidia,
  solarizedlight,
  xonokai,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import PropTypes from "prop-types";
import { About as AboutCode } from "../../codeFiles/About/About";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import tabbedCodeViewStyles from "../../styles/tabbedCodeViewStyles";

//todo: make the code view button very obviously a toggle
//todo: do the code file exports like the material dashboard ppl did, just export out of the file!

const cron = require("node-cron");

const code = `const b = "Five"
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
  { name: "AboutCard.js", code: code },
  { name: "aboutStyles.js", code: code },
  { name: "aboutCardStyles.js", code: code },
  ...commonFiles,
];

const projectFiles = [{ name: "Projects.js", code: AboutCode }, ...commonFiles];

const resumeFiles = [{ name: "Resume.js", code: AboutCode }, ...commonFiles];

class TabbedCodeView extends Component {
  constructor(props) {
    super(props);

    let page = window.location.pathname.substring(1);
    let files = this.getFiles(page);

    this.state = {
      showIntro: false,
      showArrow: false,
      showButtons: false,
      showCode: false,

      files: files,
      currentCode: files[0].code,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showIntro: true });
    }, 500);

    setTimeout(() => {
      cron.schedule("*/1 * * * * *", () => {
        this.setState({ showArrow: !this.state.showArrow });
      });
    }, 1500);

    setTimeout(() => {
      this.setState({ showButtons: true });
    }, 2500);

    setTimeout(() => {
      this.setState({ showCode: true });
    }, 2500);
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
    }
  };

  setFile = (code) => {
    this.setState({ currentCode: code });
  };

  handleSelectedBG = (code) => {
    if (this.state.currentCode === code) {
      return "rgb(2, 46, 117)";
    } else {
      return "white";
    }
  };

  handleSelectedText = (code) => {
    if (this.state.currentCode === code) {
      return "white";
    } else {
      return "rgb(2, 46, 117)";
    }
  };

  renderFileButtons = (classes) => {
    return this.state.files.map((file) => {
      return (
        <Grid item>
          <Button
            variant="contained"
            size="medium"
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
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Fade in={this.state.showIntro} timeout={3000}>
              <Typography variant="h3" className={classes.greeting}>
                Here's all the code that makes this page work
              </Typography>
            </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
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
        <br />
        <Fade in={this.state.showButtons} timeout={3000}>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {this.renderFileButtons(classes)}
          </Grid>
        </Fade>
        <Fade in={this.state.showCode} timeout={3000}>
          <div>
            <SyntaxHighlighter language="jsx" style={vs}>
              {this.state.currentCode}
            </SyntaxHighlighter>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

TabbedCodeView.propTypes = {
  className: PropTypes.string,
};

export default withStyles(tabbedCodeViewStyles)(TabbedCodeView);
