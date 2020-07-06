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
  root: {
    width: "100%",
    height: "100%",
  },
});
