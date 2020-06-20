export default (theme) => ({
  button: {
    color: "white",
  },
  buttonIcon: {
    height: 50,
    width: 50,
  },
  rowButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  columnButtons: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
});
