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
  button: {
    margin: theme.spacing(1),
    color: "white",
  },
});
