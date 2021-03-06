export default (theme) => ({
  greeting: {
    textAlign: "center",
    fontWeight: 600,
    [theme.breakpoints.down(610)]: {
      fontSize: 48 * Math.pow(0.92, 1),
    },
    [theme.breakpoints.down(560)]: {
      fontSize: 48 * Math.pow(0.92, 2),
    },
    [theme.breakpoints.down(510)]: {
      fontSize: 48 * Math.pow(0.92, 3),
    },
    [theme.breakpoints.down(460)]: {
      fontSize: 48 * Math.pow(0.92, 4),
    },
    [theme.breakpoints.down(410)]: {
      fontSize: 48 * Math.pow(0.92, 5),
    },
    [theme.breakpoints.down(360)]: {
      fontSize: 48 * Math.pow(0.92, 6),
    },
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "100vh",
    [theme.breakpoints.up(830)]: {
      width: 800,
    },
    [theme.breakpoints.down(830)]: {
      width: "90vw",
      minHeight: "80vh",
    },
    [theme.breakpoints.down(750)]: {
      minHeight: "85vh",
    },
    [theme.breakpoints.down(710)]: {
      minHeight: "80vh",
    },
    [theme.breakpoints.down(660)]: {
      minHeight: "75vh",
    },
    [theme.breakpoints.down(615)]: {
      minHeight: "70vh",
    },
    [theme.breakpoints.down(665)]: {
      minHeight: "65vh",
    },
    [theme.breakpoints.down(520)]: {
      minHeight: "60vh",
    },
  },
  cardContent: {
    textAlign: "center",
    backgroundColor: "#EDEDED",
    height: "100%",
  },
  cardActions: {
    justifyContent: "center",
    backgroundColor: "#0099FF",
    cursor: "pointer",
  },
  icon: {
    color: "white",
  },
  button: {
    backgroundColor: "#3BADF7",
    color: "white",
    "&:hover": {
      backgroundColor: "#63C1FF",
    },
  },
});
