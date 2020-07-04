export const CodeViewCode = `import React, { Component } from "react";
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

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    let files = [];

    if (typeof window !== 'undefined') {
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

export default withStyles(codeViewStyles)(CodeView);`;

export const Layout = `import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

class Layout extends Component {
  componentDidMount = () => {
    window.addEventListener("storage", (event) => {
      if (event.key === "codeView") {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("toggledBefore", true);
        }

        this.props.toggleCodeView(event.newValue);
      }
    });
  };

  toggleCodeView = (event) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("codeView", event.target.checked);
    }

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("toggledBefore", true);
    }

    this.props.toggleCodeView(event.target.checked);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Topbar
          toggleCodeView={this.toggleCodeView}
          hideToggle={this.props.hideToggle}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;`;

export const Topbar = `import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  withStyles,
  Hidden,
  Switch,
  Fade,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Link, IconButton } from "gatsby-theme-material-ui";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CodeIcon from "@material-ui/icons/Code";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import topbarStyles from "../../../styles/topbarStyles";

function Topbar(props) {
  let codeView = false;
  let toggledBefore = false;

  if (typeof localStorage !== "undefined") {
    codeView = JSON.parse(localStorage.getItem("codeView")) || false;
  }

  if (typeof localStorage !== "undefined") {
    toggledBefore = JSON.parse(localStorage.getItem("toggledBefore")) || false;
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
              aria-label="About Me"
            >
              <PersonIcon />
            </IconButton>
            <IconButton
              className={classes.mobileButton}
              size="small"
              component={Link}
              to="/projects"
              aria-label="Projects"
            >
              <BuildIcon />
            </IconButton>
            <IconButton
              className={classes.mobileButton}
              size="small"
              component={Link}
              to="/resume"
              aria-label="Resume"
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
          {!props.hideToggle && (
            <React.Fragment>
              <Tooltip
                open={!toggledBefore}
                title={
                  <Typography variant="body1">
                    Click to toggle code view!
                  </Typography>
                }
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                arrow
              >
                <Switch
                  color="default"
                  size="small"
                  inputProps={{ "aria-label": "Toggle Code View" }}
                  onChange={props.toggleCodeView}
                  checked={codeView}
                />
              </Tooltip>
              <Fade
                in={!codeView}
                timeout={0}
                style={{
                  display: codeView ? "none" : "block",
                }}
              >
                <CropOriginalIcon
                  fontSize="large"
                  className={classes.codeButton}
                />
              </Fade>
              <Fade
                in={codeView}
                timeout={0}
                style={{
                  display: !codeView ? "none" : "block",
                }}
              >
                <CodeIcon fontSize="large" className={classes.codeButton} />
              </Fade>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  );
}

Topbar.propTypes = {
  className: PropTypes.string,
};

export default withStyles(topbarStyles)(Topbar);`;

export const Footer = `import React, { Component } from "react";
import { withStyles, Grid, Typography, Hidden } from "@material-ui/core";
import { Link, IconButton } from "gatsby-theme-material-ui";
import { GH, LI, Email } from "../../GraphQLImages";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import footerStyles from "../../../styles/footerStyles";

class Footer extends Component {
  redirectGH = () => {
    if (typeof window !== 'undefined') {
      window.open("https://github.com/JackZheng10");
    }
  };

  redirectLI = () => {
    if (typeof window !== 'undefined') {
      window.open("https://www.linkedin.com/in/jackzheng10/");
    }
  };

  redirectEmail = () => {
    if (typeof window !== 'undefined') {
      window.open("mailto:jackzheng10@yahoo.com", "_self");
    }
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <div className={classes.footer}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h5" className={classes.name}>
                    Connect with me.
                  </Typography>
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
                <Hidden only={["lg", "xl", "md", "sm"]}>
                  <Grid item>
                    <IconButton onClick={this.redirectGH} aria-label="GitHub">
                      <GitHubIcon
                        fontSize="large"
                        className={classes.GHMobile}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={this.redirectLI} aria-label="LinkedIn">
                      <LinkedInIcon
                        fontSize="large"
                        className={classes.LIMobile}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={this.redirectEmail} aria-label="Email">
                      <EmailIcon
                        fontSize="large"
                        className={classes.emailMobile}
                      />
                    </IconButton>
                  </Grid>
                </Hidden>
                <Hidden only={["xs"]}>
                  <Grid item>
                    <a
                      href="https://github.com/JackZheng10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GH />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.linkedin.com/in/jackzheng10/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LI />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                  </Grid>
                  <Grid item>
                    <a href="mailto:jackzheng10@yahoo.com">
                      <Email />
                    </a>
                  </Grid>
                </Hidden>
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
                  <Typography
                    variant="body2"
                    className={classes.centerText}
                    gutterBottom
                  >
                    Created by me with{" "}
                    <span role="img" aria-label="heart-emoji">
                      ❤️
                    </span>
                    !{" "}
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://github.com/JackZheng10/Personal-Website"
                    >
                      Click to view the source code.
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default withStyles(footerStyles)(Footer);`;

export const GraphQLImages = `import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return (props) => (
    <StaticQuery
      query={graphql'
        query {
          me: file(relativePath: { eq: "AboutMe/Me.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          GH: file(relativePath: { eq: "Footer/GitHub.png" }) {
            childImageSharp {
              fixed(height: 52, width: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          LI: file(relativePath: { eq: "Footer/LinkedIn.png" }) {
            childImageSharp {
              fixed(height: 34, width: 138) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          email: file(relativePath: { eq: "Footer/Email.png" }) {
            childImageSharp {
              fixed(height: 52, width: 52) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      '}
      render={(data) => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

const Me = withImageData((props) => (
  <Img fluid={props.imageData.me.childImageSharp.fluid} />
));

const GH = withImageData((props) => (
  <Img fixed={props.imageData.GH.childImageSharp.fixed} />
));

const LI = withImageData((props) => (
  <Img fixed={props.imageData.LI.childImageSharp.fixed} />
));

const Email = withImageData((props) => (
  <Img fixed={props.imageData.email.childImageSharp.fixed} />
));

export { Me, GH, LI, Email };`;
