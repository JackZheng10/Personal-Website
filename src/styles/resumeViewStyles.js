export default (theme) => ({
  greeting: {
    textAlign: "center",
    fontWeight: 600,
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
  root: {
    width: "100%",
    height: "100%",
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up(830)]: {
      width: 800,
    },
    [theme.breakpoints.down(830)]: {
      width: "90vw",
    },
  },
  cardContent: {
    textAlign: "center",
    backgroundColor: "white",
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
