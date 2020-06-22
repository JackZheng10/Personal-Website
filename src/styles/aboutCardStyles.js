export default (theme) => ({
  //   card: {
  //     width: 400,
  //     [theme.breakpoints.down("xs")]: {
  //       width: "auto",
  //     },
  //   },
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: 400, //todo: fine, but make text centered vertically. might change depending on final font
    [theme.breakpoints.up(450)]: {
      width: 400,
    },
    [theme.breakpoints.down(450)]: {
      width: "90vw",
    },
  },
  cardHeader: {
    textAlign: "center",
    backgroundColor: "#63c1ff",
  },
  cardContent: {
    textAlign: "center",
    backgroundColor: "#63c1ff",
    height: "100%",
  },
  cardActions: {
    textAlign: "center",
  },
  text: {
    color: "white",
    [theme.breakpoints.down(410)]: {
      fontSize: 14,
    },
  },
  title: {
    color: "white",
    [theme.breakpoints.down(410)]: {
      fontSize: 22,
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: 5,
    marginBottom: 5,
  },
});
