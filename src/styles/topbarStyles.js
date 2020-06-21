export default (theme) => ({
  root: {
    //backgroundImage: "linear-gradient(to right, #0575e6, #021b79)",
    // backgroundImage:
    //   "linear-gradient(to top, #58151A, #BC2909, #BA6D09, #71A8EE, #3072EB, #1552C6, #0542A8);",
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(0, 153, 255) 15%, rgb(0, 153, 255) 50%, rgb(0, 153, 255) 100%)",
    backgroundColor: "#004e89",
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
