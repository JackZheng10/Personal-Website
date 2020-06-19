export default (theme) => ({
  button: {
    color: "black",
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
