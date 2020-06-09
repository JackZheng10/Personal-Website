export default (theme) => ({
  root: {
    //backgroundImage: "linear-gradient(to right, #0575e6, #021b79)",
    // backgroundImage:
    backgroundImage:
      "linear-gradient( 136deg, rgb(1, 201, 226) 15%, rgb(0, 153, 255) 50%, rgb(1, 201, 226) 100%)",
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
