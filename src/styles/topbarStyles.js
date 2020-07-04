export default (theme) => ({
  root: {
    backgroundColor: "#0099FF",
    height: "auto",
  },
  flexGrow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 8,
    marginRight: 8,
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
    marginRight: 4,
  },
  codeButton: {
    color: "white",
  },
  logo: {
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down(320)]: {
      display: "none !important",
    },
  },
});
