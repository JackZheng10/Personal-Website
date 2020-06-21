export default (theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  greeting: {
    textAlign: "center",
    fontWeight: 600,
    [theme.breakpoints.up(1701)]: {
      fontSize: 96,
    },
    [theme.breakpoints.down(1700)]: {
      fontSize: 90,
    },
    [theme.breakpoints.down(1600)]: {
      fontSize: 96 * Math.pow(0.9, 1),
    },
    [theme.breakpoints.down(1520)]: {
      fontSize: 96 * Math.pow(0.9, 2),
    },
    [theme.breakpoints.down(1420)]: {
      fontSize: 96 * Math.pow(0.9, 3),
    },
    [theme.breakpoints.down(1320)]: {
      fontSize: 96 * Math.pow(0.9, 4),
    },
    [theme.breakpoints.down(1230)]: {
      fontSize: 96 * Math.pow(0.9, 5),
    },
    [theme.breakpoints.down(1160)]: {
      fontSize: 96 * Math.pow(0.9, 6),
    },
    [theme.breakpoints.down(1060)]: {
      fontSize: 96 * Math.pow(0.9, 7),
    },
    [theme.breakpoints.down(980)]: {
      fontSize: 96 * Math.pow(0.9, 8),
    },
    [theme.breakpoints.down(920)]: {
      fontSize: 96 * Math.pow(0.9, 9),
    },
    [theme.breakpoints.down(860)]: {
      fontSize: 35,
    },
    [theme.breakpoints.down(800)]: {
      fontSize: 33,
    },
    [theme.breakpoints.down(751)]: {
      fontSize: 46,
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  bioTitle: {
    textAlign: "center",
    [theme.breakpoints.up(1701)]: {
      fontSize: 60,
    },
    [theme.breakpoints.down(1700)]: {
      fontSize: 60,
    },
    [theme.breakpoints.down(1600)]: {
      fontSize: 60 * Math.pow(0.92, 1),
    },
    [theme.breakpoints.down(1520)]: {
      fontSize: 60 * Math.pow(0.92, 2),
    },
    [theme.breakpoints.down(1420)]: {
      fontSize: 60 * Math.pow(0.92, 3),
    },
    [theme.breakpoints.down(1320)]: {
      fontSize: 60 * Math.pow(0.92, 4),
    },
    [theme.breakpoints.down(1230)]: {
      fontSize: 60 * Math.pow(0.92, 5),
    },
    [theme.breakpoints.down(1160)]: {
      fontSize: 60 * Math.pow(0.92, 6),
    },
    [theme.breakpoints.down(1060)]: {
      fontSize: 60 * Math.pow(0.92, 7),
    },
    [theme.breakpoints.down(980)]: {
      fontSize: 60 * Math.pow(0.92, 8),
    },
    [theme.breakpoints.down(920)]: {
      fontSize: 60 * Math.pow(0.92, 9),
    },
    [theme.breakpoints.down(860)]: {
      fontSize: 25,
    },
    [theme.breakpoints.down(800)]: {
      fontSize: 23,
    },
    [theme.breakpoints.down(751)]: {
      fontSize: 31,
    },
  },
  bioText: {
    textAlign: "center",
    [theme.breakpoints.up(1701)]: {
      fontSize: 34,
    },
    [theme.breakpoints.down(1700)]: {
      fontSize: 34,
    },
    [theme.breakpoints.down(1600)]: {
      fontSize: 34 * Math.pow(0.94, 1),
    },
    [theme.breakpoints.down(1520)]: {
      fontSize: 34 * Math.pow(0.94, 2),
    },
    [theme.breakpoints.down(1420)]: {
      fontSize: 34 * Math.pow(0.94, 3),
    },
    [theme.breakpoints.down(1320)]: {
      fontSize: 34 * Math.pow(0.94, 4),
    },
    [theme.breakpoints.down(1230)]: {
      fontSize: 34 * Math.pow(0.94, 5),
    },
    [theme.breakpoints.down(1160)]: {
      fontSize: 34 * Math.pow(0.94, 6),
    },
    [theme.breakpoints.down(1060)]: {
      fontSize: 34 * Math.pow(0.94, 7),
    },
    [theme.breakpoints.down(980)]: {
      fontSize: 34 * Math.pow(0.94, 8),
    },
    [theme.breakpoints.down(920)]: {
      fontSize: 34 * Math.pow(0.94, 9),
    },
    [theme.breakpoints.down(860)]: {
      fontSize: 18,
    },
    [theme.breakpoints.down(800)]: {
      fontSize: 16,
    },
    [theme.breakpoints.down(751)]: {
      fontSize: 20,
    },
  },
  sectionHeader: {
    textAlign: "center",
    fontWeight: 600,
    [theme.breakpoints.down(751)]: {
      marginTop: -25,
    },
    [theme.breakpoints.down(532)]: {
      fontSize: 48 * Math.pow(0.92, 1),
    },
    [theme.breakpoints.down(490)]: {
      fontSize: 48 * Math.pow(0.92, 2),
    },
    [theme.breakpoints.down(445)]: {
      fontSize: 48 * Math.pow(0.92, 3),
    },
    [theme.breakpoints.down(410)]: {
      fontSize: 48 * Math.pow(0.92, 4),
    },
    [theme.breakpoints.down(375)]: {
      fontSize: 48 * Math.pow(0.92, 5),
    },
    [theme.breakpoints.down(343)]: {
      fontSize: 48 * Math.pow(0.92, 6),
    },
  },
  sectionContent: {
    marginTop: 40,
    marginBottom: 40,
  },
  profilePic: {
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: -1,
    marginBottom: -100,
    [theme.breakpoints.down(1160)]: {
      marginRight: -50,
    },
    [theme.breakpoints.down(920)]: {
      marginRight: -80,
    },
    [theme.breakpoints.down(860)]: {
      marginRight: -90,
    },
    [theme.breakpoints.down(800)]: {
      marginRight: -100,
    },
    [theme.breakpoints.down(780)]: {
      marginRight: -120,
    },
    [theme.breakpoints.down(751)]: {
      //actually only applies at 750 AND down. should test for up too
      marginRight: "auto",
      order: 2,
    },
    order: 1,
  },
  profilePicSrc: {
    [theme.breakpoints.down(471)]: {
      width: "90vw",
      height: "auto",
    },
  },
  infoSection: {
    backgroundColor: "rgb(0, 153, 255)",
    width: "100%",
  },
  bio: {
    order: 2,
    [theme.breakpoints.down(751)]: {
      order: 1,
      marginBottom: 15,
    },
  },
  pageContainer: {
    [theme.breakpoints.down(751)]: {},
  },
});

//STARTING AT 750: vertical view
