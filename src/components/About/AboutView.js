import React, { Component } from "react";
import {
  Grid,
  Typography,
  withStyles,
  Fade,
  withWidth,
  Paper,
} from "@material-ui/core";
import { motion } from "framer-motion";
import {
  Me,
  UF,
  Dev,
  Hockey,
  Laundr,
  UFCoEng,
  UFCoEd,
} from "../../images/AboutMe";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import VizSensor from "react-visibility-sensor";
import AboutCard from "./components/AboutCard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import aboutViewStyles from "../../styles/aboutViewStyles";

const cron = require("node-cron");

const animations = {
  slide: { y: [50, 0], opacity: [0, 0.5, 1] },
  hidden: { opacity: 0 },
};

//todo: test on mobile: when small enough, change the topbar buttons to just iconbuttons + resize bottom images as they cause bleedings
//todo: fix br spacings hehe
//todo: use the window scroll to on every page to force starting at the top
//todo: stay visible after shown, just use prev state, if true then keep true? w/viz sensor
//todo: find out why sometimes when switching to this, the about cards flash as if it was visible
//todo: redo visibility stuff. and fading as well.
//todo: maybe change timings back (to before 6/14)
//todo: add dates to experience cards?
//todo: margin vs padding? get this together.
//todo: boxshadow to top of the paper
//todo: restructure images. rename, move to own folder, do imports like projects

//graphQL testing

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
      showArrow: false,
      showCard1: false,
      showCard2: false,
      showCard3: false,
      showLearnExp: false,
      showArrow2: false,
      showExp1: false,
      showExp2: false,
      showExp3: false,
    };

    this.flashArrow = cron.schedule(
      "*/1 * * * * *",
      () => {
        this.setState({ showArrow: !this.state.showArrow });
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
      this.flashArrow.start();
    }, 3000);
  };

  //todo: testing delay on card vis so no ghost cards on switch back to normal view
  renderAboutCards = (isVisible, number) => {
    let prevState = this.state["showCard" + number];

    if (!prevState && isVisible) {
      this.setState({ ["showCard" + number]: isVisible });
    }
  };

  renderExperienceCards = (isVisible, number) => {
    let prevState = this.state["showExp" + number];

    if (!prevState && isVisible) {
      this.setState({ ["showExp" + number]: isVisible });
    }
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
                {/* <img
                  src={Me}
                  alt="Profile Pic"
                  className={classes.profilePicSrc}
                /> */}
                <StaticQuery
                  query={graphql`
                    query {
                      file(relativePath: { eq: "AboutMe/Me.png" }) {
                        childImageSharp {
                          fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_tracedSVG
                          }
                        }
                      }
                    }
                  `}
                  render={(data) => (
                    <div className={classes.profilePicSrc}>
                      <Img fluid={data.file.childImageSharp.fluid} />
                    </div>
                  )}
                />
              </Grid>
              <Grid item className={classes.bio}>
                {/* <Fade in={this.state.showBio} timeout={3000}> */}
                <motion.div
                  variants={animations}
                  animate="slide"
                  initial="hidden"
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                >
                  <Typography variant="h1" className={classes.greeting}>
                    Hey there, I'm Jack Zheng
                  </Typography>
                </motion.div>
                <br />
                <motion.div
                  variants={animations}
                  animate="slide"
                  initial="hidden"
                  transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                >
                  <Typography variant="h2" className={classes.bioTitle}>
                    Computer Science Student
                  </Typography>
                </motion.div>
                <motion.div
                  variants={animations}
                  animate="slide"
                  initial="hidden"
                  transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                >
                  <Typography variant="h4" className={classes.bioText}>
                    Aspiring Software Engineer
                  </Typography>
                </motion.div>
                {/* </Fade> */}
              </Grid>
            </Grid>
          </Grid>
          <br />
          <br />
          <Paper className={classes.infoSection}>
            {/* <br />
            <br /> */}
            <Grid item className={classes.sectionContent}>
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
                  <Fade in={this.state.showArrow} timeout={990}>
                    <KeyboardArrowDownIcon
                      fontSize="large"
                      className={classes.sectionArrow}
                    />
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
                              image={UF}
                              alt="UF Logo"
                              title="I am a..."
                              text="I'm a Junior at the University of Florida 
                    studying computer science. I'm grateful for everything that I'm learning along the way, and
                     I can't wait to see where my future takes me."
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
                              image={Dev}
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
                              image={Hockey}
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
            {/* <br />
            <br /> */}
          </Paper>
          <br />
          <br />
          <br />
          <br />
          <Paper className={classes.infoSection}>
            {/* <br />
            <br /> */}
            <Grid item className={classes.sectionContent}>
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
                      <Fade in={this.state.showArrow} timeout={990}>
                        <KeyboardArrowDownIcon
                          fontSize="large"
                          className={classes.sectionArrow}
                        />
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
                              image={Laundr}
                              alt="Laundr Logo"
                              title="Laundr"
                              text="I'm a Software Engineering Intern at Laundr, an on-demand laundry service.
                               I work with Xamarin Forms, ASP.NET, MySQL, and C# to implement and debug features on their
                               iOS and Android application. I'm also the sole developer for their upcoming web application
                                that's built with the MERN stack."
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
                              image={UFCoEng}
                              alt="UF CoE Logo"
                              title="UF College of Engineering"
                              text="I'm a teaching assistant for CEN3031 (Introduction to Software Engineering) and COP3503
                               (Programming Fundamentals 2). I deal with topics related to programming concepts, C++, the MERN stack, and software development.
                               I lead weekly labs, lessons, and office hours as well as produce instructional videos."
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
                              image={UFCoEd}
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
            {/* <br />
            <br /> */}
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
