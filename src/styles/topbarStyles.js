export default (theme) => ({
  root: {
    // backgroundImage: "linear-gradient(to right, #0575e6, #021b79)",
    backgroundColor: "rgb(0, 153, 255)",
    alignItems: "center",
  },
  flexGrow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "white",
    "&:hover": {
      backgroundColor: "grey",
      borderColor: "white",
    },
  },
  offset: theme.mixins.toolbar,
});
