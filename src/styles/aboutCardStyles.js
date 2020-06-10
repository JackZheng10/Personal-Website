export default (theme) => ({
  //   card: {
  //     width: 400,
  //     [theme.breakpoints.down("xs")]: {
  //       width: "auto",
  //     },
  //   },
  root: {
    width: "100%",
    height: 360,
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
  cardHeader: {
    textAlign: "center",
    backgroundColor: "rgb(2, 46, 117)",
  },
  cardContent: {
    textAlign: "center",
    backgroundColor: "rgb(0, 153, 255)",
    height: "100%",
  },
  cardActions: {
    textAlign: "center",
  },
  text: {
    color: "white",
    top: 50,
  },
  title: {
    color: "white",
  },
  media: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
});
