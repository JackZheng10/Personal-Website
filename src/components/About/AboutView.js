import React, { Component } from "react";
import {
  Grid,
  Typography,
  withStyles,
  Fade,
  withWidth,
  Paper,
} from "@material-ui/core";
import PropTypes from "prop-types";
import VizSensor from "react-visibility-sensor";
import AboutCard from "./components/AboutCard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ProfilePic from "../../images/ProfilePic.png";
import UFLogo from "../../images/UFLogo.jpg";
import DevLogo from "../../images/DevLogo.png";
import HockeyLogo from "../../images/HockeyLogo.png";
import LaundrLogo from "../../images/LaundrLogo.png";
import UFCOELogo from "../../images/UFCOELogo.png";
import UFCOEdLogo from "../../images/UFCOEdLogo.png";
import aboutViewStyles from "../../styles/aboutViewStyles";

//test
// import FlareComponent from "flare-react"
// import Success from "../temp/Success.flr"

const cron = require("node-cron");

//todo: test on mobile: when small enough, change the topbar buttons to just iconbuttons + resize bottom images as they cause bleedingnpm s
//todo: fix br spacings hehe
//todo: use the window scroll to on every page to force starting at the top
//todo: stay visible after shown, just use prev state, if true then keep true? w/viz sensor
//todo: find out why sometimes when switching to this, the about cards flash as if it was visible
//todo: collapsing on refresh or revisit? maybe because of the particle bg or fade?? remove fades on bio to see why. it shouldnt bug out when removed
//todo: on refesh at width 1222 in dev mode, wierd shifting of bio text. maybe a bug
//todo: redo visibility stuff. and fading as well.
//todo: still fade in the greeting first, or only do it on width 750 or less (when vertical view starts)
//todo: maybe change timings back (to before 6/14)
//todo: make card text smaller on smaller views as it bleeds. also do for images :)
//todo: add dates to experience cards?

class AboutView extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }

    this.state = {
      showGreeting: false,
      showPic: false,
      showBio: false,
      showLearnMore: false,
      showArrow1: false,
      showCard1: false,
      showCard2: false,
      showCard3: false,
      showLearnExp: false,
      showArrow2: false,
      showExp1: false,
      showExp2: false,
      showExp3: false,
    };

    this.flashArrow1 = cron.schedule(
      "*/1 * * * * *",
      () => {
        this.setState({ showArrow1: !this.state.showArrow1 });
      },
      { scheduled: false }
    );

    //todo: remove logic stuff for experience section viz sensor
    this.flashArrow2 = cron.schedule(
      "*/1 * * * * *",
      () => {
        this.setState({ showArrow2: !this.state.showArrow2 });
      },
      { scheduled: false }
    );
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showGreeting: true });
    }, 500);

    setTimeout(() => {
      this.setState({ showPic: true });
    }, 1000);

    setTimeout(() => {
      this.setState({ showBio: true });
    }, 1000);

    setTimeout(() => {
      this.setState({ showLearnMore: true });
    }, 2000);

    setTimeout(() => {
      this.flashArrow1.start();
    }, 3000);
  };

  //todo: testing delay on card vis so no ghost cards on switch back to normal view
  renderAboutCards = (isVisible, number) => {
    setTimeout(() => {
      this.setState({ ["showCard" + number]: isVisible });
    }, 100);
  };

  renderExperienceCards = (isVisible, number) => {
    this.setState({ ["showExp" + number]: isVisible });
  };

  handleXsVisible = () => {
    return this.props.width === "xs" ||
      this.props.width === "sm" ||
      this.props.width === "md"
      ? true
      : false;
  };

  handleXsTimeout = (card) => {
    if (
      this.props.width === "xs" ||
      this.props.width === "sm" ||
      this.props.width === "md"
    ) {
      return 3000;
    } else {
      switch (card) {
        case 1:
          return 1000;
        case 2:
          return 2000;
        case 3:
          return 3000;
        default:
          return 3000;
      }
    }
  };

  handleXsSpacing = () => {
    if (
      this.props.width === "xs" ||
      this.props.width === "sm" ||
      this.props.width === "md"
    ) {
      return 0;
    } else {
      return 2;
    }
  };

  handleXsPadding = () => {
    if (
      this.props.width === "xs" ||
      this.props.width === "sm" ||
      this.props.width === "md"
    ) {
      return 8;
    }
  };

  renderLearnExp = (isVisible) => {
    this.setState({ showLearnExp: isVisible });
  };

  renderArrow2 = (isVisible) => {
    if (isVisible) {
      setTimeout(() => {
        this.flashArrow2.start();
      }, 1000);
    } else {
      this.setState({ showArrow2: false }); //review this change, wanted to see if it fixed the arrow not disppearing
      //grid container causes the syntax highlighter to have an auto width
      this.flashArrow2.stop();
    }
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
          className={classes.pageContainer}
        >
          <Grid item>
            <Grid
              container
              spacing={0}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.profilePic}>
                <Fade in={this.state.showPic} timeout={3000}>
                  <img
                    src={ProfilePic}
                    alt="Profile Pic"
                    className={classes.profilePicSrc}
                  />
                </Fade>
              </Grid>
              <Grid item className={classes.bio}>
                <Fade in={this.state.showBio} timeout={3000}>
                  <div style={{ textAlign: "center" }}>
                    <Typography variant="h1" className={classes.greeting}>
                      Hey there, I'm Jack Zheng
                    </Typography>
                    <br />
                    <Typography variant="h2" className={classes.bioTitle}>
                      Computer Science Student
                    </Typography>
                    <Typography variant="h4" className={classes.bioText}>
                      Aspiring Software Engineer
                    </Typography>
                  </div>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <br />
          <Paper elevation={24} className={classes.infoSection}>
            <br />
            <br />
            <Grid item>
              <Grid
                container
                spacing={0}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Fade in={this.state.showLearnMore} timeout={3000}>
                    <Typography variant="h3" className={classes.sectionHeader}>
                      Learn more about me
                    </Typography>
                  </Fade>
                </Grid>
                <Grid item>
                  <Fade in={this.state.showArrow1} timeout={990}>
                    <KeyboardArrowDownIcon fontSize="large" />
                  </Fade>
                </Grid>
                <br />
                <br />
                <Grid item>
                  <Grid
                    container
                    spacing={this.handleXsSpacing()}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <VizSensor
                      partialVisibility={this.handleXsVisible()}
                      onChange={(isVisible) => {
                        this.renderAboutCards(isVisible, 1);
                      }}
                    >
                      <Grid item style={{ padding: this.handleXsPadding() }}>
                        <Fade
                          in={this.state.showCard1}
                          timeout={this.handleXsTimeout(1)}
                        >
                          <div>
                            <AboutCard
                              image={UFLogo}
                              alt="UF Logo"
                              title="I am a..."
                              text="I'm a Junior at the University of Florida 
                    studying computer science. I was extremely addicted to computers as a kid
                     - and I can say that not much has changed! 
                    Above all else, I'm grateful for what I'm learning along the way."
                            />
                          </div>
                        </Fade>
                      </Grid>
                    </VizSensor>
                    <VizSensor
                      partialVisibility={this.handleXsVisible()}
                      onChange={(isVisible) => {
                        this.renderAboutCards(isVisible, 2);
                      }}
                    >
                      <Grid item style={{ padding: this.handleXsPadding() }}>
                        <Fade
                          in={this.state.showCard2}
                          timeout={this.handleXsTimeout(2)}
                        >
                          <div>
                            <AboutCard
                              image={DevLogo}
                              alt="Dev Logo"
                              title="I like to..."
                              text="I like to learn about new technologies and topics, 
                    so I spend a lot of time working on personal projects. 
                    I'm very interested in full-stack web development, 
                    but I've also worked with mobile applications before."
                            />
                          </div>
                        </Fade>
                      </Grid>
                    </VizSensor>
                    <VizSensor
                      partialVisibility={this.handleXsVisible()}
                      onChange={(isVisible) => {
                        this.renderAboutCards(isVisible, 3);
                      }}
                    >
                      <Grid item style={{ padding: this.handleXsPadding() }}>
                        <Fade
                          in={this.state.showCard3}
                          timeout={this.handleXsTimeout(3)}
                        >
                          <div>
                            <AboutCard
                              image={HockeyLogo}
                              alt="Hockey Logo"
                              title="In my free time..."
                              text="When I'm not doing anything related to computer science, 
                              you'll likely find me at the gym, playing hockey (wherever I can find a rink), 
                            or chilling out with some music. Hit me up for some good recommendations. "
                            />
                          </div>
                        </Fade>
                      </Grid>
                    </VizSensor>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <br />
          </Paper>
          <br />
          <br />
          <br />
          <br />
          <Paper elevation={24} className={classes.infoSection}>
            <br />
            <br />
            <Grid item>
              <Grid
                container
                spacing={0}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  {/* <VizSensor
                    onChange={(isVisible) => {
                      this.renderLearnExp(isVisible);
                    }}
                  > */}
                  <Grid item>
                    <Fade in={this.state.showLearnMore} timeout={3000}>
                      <Typography
                        variant="h3"
                        className={classes.sectionHeader}
                      >
                        My experience
                      </Typography>
                    </Fade>
                  </Grid>
                  {/* </VizSensor> */}
                </Grid>
                <Grid item>
                  <Grid
                    container
                    spacing={0}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {/* <VizSensor
                      onChange={(isVisible) => {
                        this.renderArrow2(isVisible);
                      }}
                    > */}
                    <Grid item>
                      <Fade in={this.state.showArrow1} timeout={990}>
                        <KeyboardArrowDownIcon fontSize="large" />
                      </Fade>
                    </Grid>
                    {/* </VizSensor> */}
                  </Grid>
                </Grid>
                <br />
                <br />
                <Grid item>
                  <Grid
                    container
                    spacing={this.handleXsSpacing()}
                    style={{ padding: this.handleXsPadding() }}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <VizSensor
                      partialVisibility={this.handleXsVisible()}
                      onChange={(isVisible) => {
                        this.renderExperienceCards(isVisible, 1);
                      }}
                    >
                      <Grid item style={{ padding: this.handleXsPadding() }}>
                        <Fade
                          in={this.state.showExp1}
                          timeout={this.handleXsTimeout(1)}
                        >
                          <div>
                            <AboutCard
                              image={LaundrLogo}
                              alt="Laundr Logo"
                              title="Laundr"
                              text="I'm a Software Engineering Intern at Laundr, an on-demand laundry service.
                               I work with Xamarin Forms, ASP.NET, MySQL, and C# to implement and debug features on their
                               iOS and Android application. I'm also the sole developer for their upcoming web application.
                              "
                            />
                          </div>
                        </Fade>
                      </Grid>
                    </VizSensor>
                    <VizSensor
                      partialVisibility={this.handleXsVisible()}
                      onChange={(isVisible) => {
                        this.renderExperienceCards(isVisible, 2);
                      }}
                    >
                      <Grid item style={{ padding: this.handleXsPadding() }}>
                        <Fade
                          in={this.state.showExp2}
                          timeout={this.handleXsTimeout(2)}
                        >
                          <div>
                            <AboutCard
                              image={UFCOELogo}
                              alt="UF CoE Logo"
                              title="UF College of Engineering"
                              text="I'm currently a TA for CEN3031 (Introduction to Software Engineering) and COP3503
                               (Programming Fundamentals 2). This involves topics related to programming concepts, C++, the MERN stack, and software development.
                               I help lead weekly labs, discussions, lessons, and office hours as well as produce instructional videos."
                            />
                          </div>
                        </Fade>
                      </Grid>
                    </VizSensor>
                    <VizSensor
                      partialVisibility={this.handleXsVisible()}
                      onChange={(isVisible) => {
                        this.renderExperienceCards(isVisible, 3);
                      }}
                    >
                      <Grid item style={{ padding: this.handleXsPadding() }}>
                        <Fade
                          in={this.state.showExp3}
                          timeout={this.handleXsTimeout(3)}
                        >
                          <div>
                            <AboutCard
                              image={UFCOEdLogo}
                              alt="UF CoE Logo"
                              title="UF College of Education"
                              text="I was formerly an Undergraduate Research Assistant under Dr. Zhihui Fang,
                              studying K-12 students' informational writing for nominal complexity. I was involved with 
                              data collection, analysis, management, and the synthesis of a currently-submitted
                              research paper for which I am a co-author."
                            />
                          </div>
                        </Fade>
                      </Grid>
                    </VizSensor>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <br />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

AboutView.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(withStyles(aboutViewStyles)(AboutView));