export default (theme) => ({
  greeting: {
    textAlign: "center",
  },
  root: {
    width: "100%",
    height: "100%",
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up(649)]: {
      width: 400,
    },
    [theme.breakpoints.down(650)]: {
      width: "90vw",
    },
  },
  cardContent: {
    textAlign: "center",
    backgroundColor: "rgb(0, 153, 255)",
    height: "100%",
  },
  cardActions: {
    justifyContent: "center",
    backgroundColor: "white",
  },
});
