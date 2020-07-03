import React, { Component } from "react";
import {
  withStyles,
  Grid,
  Typography,
  Fade,
  withWidth,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  FaReact,
  FaNodeJs,
  FaYelp,
  FaRegCalendar,
  FaStripeS,
  FaPython,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrGatsbyjs } from "react-icons/gr";
import {
  LWA1,
  LWA2,
  LWA3,
  LWA4,
  LWA5,
  LWA6,
  LWA7,
} from "../../images/Projects/LaundrWebApp";
import { SS1, SS2, SS3, SS4, SS5 } from "../../images/Projects/SnapScan";
import {
  GLCP1,
  GLCP2,
  GLCP3,
  GLCP4,
  GLCP5,
} from "../../images/Projects/GonzaloLawClientPortal";
import { EM1 } from "../../images/Projects/EatMe";
import { PS1 } from "../../images/Projects/PersonalSite";
import netlifyIcon from "@iconify/icons-cib/netlify";
import jsIcon from "@iconify/icons-cib/js";
import googleCloud from "@iconify/icons-cib/google-cloud";
import PropTypes from "prop-types";
import ProjectCard from "./components/ProjectCard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import projectsViewStyles from "../../styles/projectsViewStyles";

const cron = require("node-cron");

const animations = {
  slide: { y: [50, 0], opacity: [0, 0.5, 1] },
  hidden: { opacity: 0 },
};

class ProjectsView extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== `undefined`) {
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
      this.flashArrow.start();
    }, 1000);
  };

  handleXsDots = () => {
    if (this.props.width === "xs") {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const classes = this.props.classes;
    const showDots = this.handleXsDots();

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
                    Explore some of the projects I've worked on
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
            <div style={{ padding: 16 }}>
              <Grid
                container
                spacing={4}
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
                    <ProjectCard
                      title="Laundr Web App"
                      description="A web application for Laundr, an on-demand laundry service. Allows users to place orders, purchase
                      subscriptions, and track their order. Also lets drivers and washers handle orders. Comes with an admin
                      panel to manage everything! Currently a work in progress."
                      images={[
                        {
                          src: LWA1,
                          alt: "Login",
                        },
                        { src: LWA2, alt: "New Order" },
                        { src: LWA3, alt: "Order Status" },
                        { src: LWA4, alt: "Subscriptions" },
                        {
                          src: LWA5,
                          alt: "Subscription Status",
                        },
                        {
                          src: LWA6,
                          alt: "Buy a Subscription",
                        },
                        {
                          src: LWA7,
                          alt: "Driver Dashboard",
                        },
                      ]}
                      techStack={[
                        {
                          name: "React.js",
                          icon: <FaReact />,
                          color: "#61DBFB",
                        },
                        {
                          name: "MongoDB",
                          icon: <DiMongodb />,
                          color: "#4DB33D",
                        },
                        {
                          name: "Node.js",
                          icon: <FaNodeJs />,
                          color: "#68A063",
                        },
                        {
                          name: "Express.js",
                          icon: <Icon icon={jsIcon} />,
                          color: "#f3df1e",
                        },
                        {
                          name: "Stripe.js",
                          icon: <FaStripeS />,
                          color: "#4379FF",
                        },
                      ]}
                      link="https://github.com/JackZheng10/Laundr-Web-App"
                      showArrows={true}
                      showDots={showDots}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    variants={animations}
                    animate="slide"
                    initial="hidden"
                    transition={{ delay: 3, duration: 1, ease: "easeOut" }}
                  >
                    <ProjectCard
                      title="SnapScan"
                      description="A mobile application made during SwampHacks VI that allows users to track their expenses 
                      in a variety of categories by taking a picture of their receipts, extracting information on purchases, 
                      and generating thorough analyses based on purchase history."
                      images={[
                        { src: SS1, alt: "Receipt Scan" },
                        { src: SS2, alt: "Scan Results" },
                        { src: SS3, alt: "Statistics" },
                        { src: SS4, alt: "Purchase History" },
                        { src: SS5, alt: "Purchase Details" },
                      ]}
                      techStack={[
                        {
                          name: "React Native",
                          icon: <FaReact />,
                          color: "#61DBFB",
                        },
                        {
                          name: "Node.js",
                          icon: <FaNodeJs />,
                          color: "#68A063",
                        },
                        {
                          name: "Python 3",
                          icon: <FaPython />,
                          color: "#FFE873",
                        },
                        {
                          name: "Google Cloud",
                          icon: <Icon icon={googleCloud} />,
                          color: "#609cf3",
                        },
                      ]}
                      link="https://github.com/JackZheng10/SwampHacks2020_SnapScan"
                      showArrows={true}
                      showDots={showDots}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    variants={animations}
                    animate="slide"
                    initial="hidden"
                    transition={{ delay: 3.5, duration: 1, ease: "easeOut" }}
                  >
                    <ProjectCard
                      title="Gonzalo Law Client Portal"
                      description="A client portal for Gonzalo Law to assist with legal procedures. Users can register, 
                      recover their password, view projects and their progress, download/upload files, and view their 
                      calendar. Admins can create/delete projects, update their progress, upload files, update user calendars, and delete users."
                      images={[
                        { src: GLCP1, alt: "Login" },
                        { src: GLCP2, alt: "Admin Dashboard" },
                        { src: GLCP3, alt: "Projects" },
                        { src: GLCP4, alt: "Project Details" },
                        { src: GLCP5, alt: "Calendar" },
                      ]}
                      techStack={[
                        {
                          name: "React.js",
                          icon: <FaReact />,
                          color: "#61DBFB",
                        },
                        {
                          name: "MongoDB",
                          icon: <DiMongodb />,
                          color: "#4DB33D",
                        },
                        {
                          name: "Node.js",
                          icon: <FaNodeJs />,
                          color: "#68A063",
                        },
                        {
                          name: "Express.js",
                          icon: <Icon icon={jsIcon} />,
                          color: "#f3df1e",
                        },
                        {
                          name: "Google Calendar",
                          icon: <FaRegCalendar />,
                          color: "#609cf3",
                        },
                      ]}
                      link="https://github.com/JackZheng10/Gonzalo-Law-Client-Portal"
                      showArrows={true}
                      showDots={showDots}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    variants={animations}
                    animate="slide"
                    initial="hidden"
                    transition={{ delay: 4, duration: 1, ease: "easeOut" }}
                  >
                    <ProjectCard
                      title="Eat Me"
                      description="A mobile application that allows users to group together and decide on a place to eat through an individual 
                      swipe-and-match experience. Users can evaluate a variety of factors including price, Yelp rating, and distance. Spend less 
                      time deciding and more time eating! Currently a work in progress."
                      images={[{ src: EM1, alt: "Coming Soon" }]}
                      techStack={[
                        {
                          name: "React Native",
                          icon: <FaReact />,
                          color: "#61DBFB",
                        },
                        {
                          name: "MongoDB",
                          icon: <DiMongodb />,
                          color: "#4DB33D",
                        },
                        {
                          name: "Node.js",
                          icon: <FaNodeJs />,
                          color: "#68A063",
                        },
                        {
                          name: "Express.js",
                          icon: <Icon icon={jsIcon} />,
                          color: "#f3df1e",
                        },
                        {
                          name: "Yelp",
                          icon: <FaYelp />,
                          color: "#F15C4F",
                        },
                      ]}
                      link="https://github.com/JackZheng10/Eat-Me"
                      showArrows={false}
                      showDots={false}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    variants={animations}
                    animate="slide"
                    initial="hidden"
                    transition={{ delay: 4.5, duration: 1, ease: "easeOut" }}
                  >
                    <ProjectCard
                      title="Personal Website"
                      description="The website you're on right now, made to showcase information about myself!"
                      images={[{ src: PS1, alt: "About Me" }]}
                      techStack={[
                        {
                          name: "React.js",
                          icon: <FaReact />,
                          color: "#61DBFB",
                        },
                        {
                          name: "Node.js",
                          icon: <FaNodeJs />,
                          color: "#68A063",
                        },
                        {
                          name: "Gatsby.js",
                          icon: <GrGatsbyjs />,
                          color: "#663399",
                        },
                        {
                          name: "Netlify",
                          icon: <Icon icon={netlifyIcon} />,
                          color: "#00C7B7",
                        },
                      ]}
                      link="https://github.com/JackZheng10/Personal-Website"
                      showArrows={false}
                      showDots={false}
                    />
                  </motion.div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

ProjectsView.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(withStyles(projectsViewStyles)(ProjectsView));
