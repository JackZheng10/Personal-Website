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
import { About as AboutCode } from "../../codeFiles/About";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import tabbedCodeViewStyles from "../../styles/tabbedCodeViewStyles";

//todo: make the code view button very obviously a toggle

const cron = require("node-cron");

const code = `const b = "Five"
const c = "Six";
console.log("Seven")`;

const aboutFiles = [
  { name: "About.js", code: AboutCode },
  { name: "AboutOther.js", code: code },
];

class TabbedCodeView extends Component {
  state = {
    showIntro: false,
    showArrow: false,
    showButtons: false,
    showCode: false,
    currentCode: AboutCode,
  };

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
    let page = window.location.pathname.substring(1);

    let files = this.getFiles(page);

    return files.map((file) => {
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
        <br />
        <br />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Fade in={this.state.showIntro} timeout={3000}>
              <Typography variant="h4" className={classes.greeting}>
                Here's all the code that makes the page you're on work
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
        <br />
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

TabbedCodeView.propTypes = {
  className: PropTypes.string,
};

export default withStyles(tabbedCodeViewStyles)(TabbedCodeView);
