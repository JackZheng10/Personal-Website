export default (theme) => ({
  root: {
    backgroundColor: "rgb(0, 153, 255)",
    height: "auto",
  },
  flexGrow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "white",
    "&:hover": {
      backgroundColor: "#47b4fc",
      borderColor: "white",
    },
  },
  offset: theme.mixins.toolbar,
  mobileButton: {
    color: "white",
    marginRight: 25,
  },
  codeButton: {
    color: "white",
  },
});
