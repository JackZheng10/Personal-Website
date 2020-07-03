export default (theme) => ({
  greeting: {
    textAlign: "center",
    fontWeight: 600,
    [theme.breakpoints.down(600)]: {
      fontSize: 48 * Math.pow(0.92, 1),
    },
    [theme.breakpoints.down(550)]: {
      fontSize: 48 * Math.pow(0.92, 2),
    },
    [theme.breakpoints.down(500)]: {
      fontSize: 48 * Math.pow(0.92, 3),
    },
    [theme.breakpoints.down(450)]: {
      fontSize: 48 * Math.pow(0.92, 4),
    },
    [theme.breakpoints.down(400)]: {
      fontSize: 48 * Math.pow(0.92, 5),
    },
    [theme.breakpoints.down(350)]: {
      fontSize: 48 * Math.pow(0.92, 6),
    },
  },
  root: {
    width: "100%",
    height: "100%",
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "100vh",
    // [theme.breakpoints.up(800)]: {
    //   minHeight: 800,
    // },
    [theme.breakpoints.up(830)]: {
      width: 800,
    },
    [theme.breakpoints.down(830)]: {
      width: "90vw",
    },
    [theme.breakpoints.down(660)]: {
      minHeight: "90vh",
    },
    [theme.breakpoints.down(580)]: {
      minHeight: "80vh",
    },
    [theme.breakpoints.down(510)]: {
      minHeight: "70vh",
    },
    // [theme.breakpoints.down(480)]: {
    //   minHeight: "60vh",
    // },
  },
  cardContent: {
    textAlign: "center",
    backgroundColor: "#ededed",
    height: "100%",
  },
  cardActions: {
    justifyContent: "center",
    backgroundColor: "rgb(0, 153, 255)",
    cursor: "pointer",
  },
  icon: {
    color: "white",
  },
});
