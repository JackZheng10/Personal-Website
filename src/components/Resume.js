import React, { Component } from "react";
import {
  Fade,
  Button,
  withStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { SizeMe } from "react-sizeme";
import { Document, Page, pdfjs } from "react-pdf";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import GetAppIcon from "@material-ui/icons/GetApp";
import resumeStyles from "../styles/resumeStyles";
import ResumePDF from "../files/PDFTest.pdf";
// import { Document, Page } from "react-pdf";
// import { Document, Page } from "react-pdf/build/entry.noworker";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import PDFTest from "../files/PDFTest.pdf";

const cron = require("node-cron");

class Resume extends Component {
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
    }, 1500);

    setTimeout(() => {
      this.setState({ showResume: true });
    }, 2500);
  };

  handleDownload = () => {
    alert(1);
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <br />
        <br />
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
                <Fade in={this.state.showIntro} timeout={3000}>
                  <Typography variant="h3" className={classes.greeting}>
                    Download the latest version of my resume
                  </Typography>
                </Fade>
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
                <Fade in={this.state.showResume} timeout={3000}>
                  <div className={classes.layout}>
                    <Card className={classes.root} elevation={10}>
                      <CardContent className={classes.cardContent}>
                        <SizeMe
                          monitorWidth
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
                      <Divider />
                      <CardActions
                        className={classes.cardActions}
                        onClick={this.handleDownload}
                      >
                        <GetAppIcon fontSize="large" />
                      </CardActions>
                    </Card>
                  </div>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

Resume.propTypes = {
  className: PropTypes.string,
};

export default withStyles(resumeStyles)(Resume);
