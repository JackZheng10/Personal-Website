export const ResumeView = `import React, { Component } from "react";
import {
  Fade,
  withStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  CardActions,
  Button,
} from "@material-ui/core";
import { SizeMe } from "react-sizeme";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import GetAppIcon from "@material-ui/icons/GetApp";
import resumeViewStyles from "../../styles/resumeViewStyles";
import Resume from "../../files/JackZheng_Resume.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/{pdfjs.version}/pdf.worker.js';

const cron = require("node-cron");

const animations = {
  slide: { y: [50, 0], opacity: [0, 0.5, 1] },
  hidden: { opacity: 0 },
};

class ResumeView extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    this.state = {
      showArrow: false,
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
    if (typeof window !== "undefined") {
      window.open(Resume);
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
        <div style={{ height: 20 }} />
        <Grid item>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <motion.div
                variants={animations}
                animate="slide"
                initial="hidden"
                transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
              >
                <div className={classes.layout}>
                  <Card className={classes.root} elevation={10}>
                    <CardActions className={classes.cardActions}>
                      <Button
                        variant="contained"
                        size="medium"
                        onClick={this.handleDownload}
                        className={classes.button}
                        startIcon={<GetAppIcon />}
                      >
                        Download
                      </Button>
                    </CardActions>
                    <Divider />
                    <CardContent className={classes.cardContent}>
                      <SizeMe
                        monitorWidth
                        refreshRate={144}
                        refreshMode={"debounce"}
                        render={({ size }) => (
                          <React.Fragment>
                            <Document file={Resume}>
                              <Page
                                width={size.width}
                                pageNumber={1}
                                renderTextLayer={false}
                              />
                            </Document>
                          </React.Fragment>
                        )}
                      />
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
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

export default withStyles(resumeViewStyles)(ResumeView);`;
