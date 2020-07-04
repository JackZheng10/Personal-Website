export default (theme) => ({
  root: {
    backgroundColor: "#0099FF",
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
      backgroundColor: "#47B4FC",
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
