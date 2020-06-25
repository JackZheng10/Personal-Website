import React, { Component } from "react";
import {
  Fade,
  withStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  CardActions,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { SizeMe } from "react-sizeme";
import { Document, Page, pdfjs } from "react-pdf";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import GetAppIcon from "@material-ui/icons/GetApp";
import resumeViewStyles from "../../styles/resumeViewStyles";
import ResumePDF from "../../files/PDFTest.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const cron = require("node-cron");

const animations = {
  slide: { y: [50, 0], opacity: [0, 0.5, 1] },
  hidden: { opacity: 0 },
};

//todo: give placeholder height for loading element so the page doesnt collapse randomly on refresh
//todo: make download button ripple, see MUI button page below custom

class ResumeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showIntro: false,
      showArrow: false,
      showResume: false,
      numPages: null,
      pageNumber: 1,
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
    }, 1000);

    setTimeout(() => {
      this.setState({ showResume: true });
    }, 2500);
  };

  handleDownload = () => {
    if (typeof window !== `undefined`) {
      window.open(ResumePDF);
    }
  };

  render() {
    const classes = this.props.classes;

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              {/* <Fade in={this.state.showIntro} timeout={3000}> */}
              <motion.div
                variants={animations}
                animate="slide"
                initial="hidden"
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              >
                <Typography variant="h3" className={classes.greeting}>
                  Download the latest version of my resume
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
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              {/* <Fade in={this.state.showResume} timeout={3000}> */}
              <motion.div
                variants={animations}
                animate="slide"
                initial="hidden"
                transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
              >
                <div className={classes.layout}>
                  <Card className={classes.root} elevation={10}>
                    <CardActions
                      className={classes.cardActions}
                      onClick={this.handleDownload}
                    >
                      <GetAppIcon fontSize="large" className={classes.icon} />
                    </CardActions>
                    <Divider />
                    <CardContent className={classes.cardContent}>
                      <SizeMe
                        monitorWidth //or height?
                        refreshRate={144}
                        refreshMode={"debounce"}
                        render={({ size }) => (
                          <React.Fragment>
                            <Document file={ResumePDF}>
                              <Page width={size.width} pageNumber={1} />
                            </Document>
                          </React.Fragment>
                        )}
                      />
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              {/* </Fade> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ResumeView.propTypes = {
  className: PropTypes.string,
};

export default withStyles(resumeViewStyles)(ResumeView);
