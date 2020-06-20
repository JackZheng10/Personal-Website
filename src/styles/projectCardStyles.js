export default (theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    height: "auto",
    [theme.breakpoints.up(800)]: {
      width: 750,
    },
    [theme.breakpoints.down(800)]: {
      width: "90vw",
    },
  },
  cardHeader: {
    textAlign: "center",
    backgroundColor: "rgb(0, 153, 255)",
  },
  cardContent: {
    textAlign: "center",
    backgroundColor: "rgb(0, 153, 255)",
    height: "100%",
  },
  contentText: {
    color: "white",
  },
  title: {
    color: "white",
    fontWeight: 600,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
  cardActions: {
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "rgb(0, 153, 255)",
    color: "white",
    "&:hover": {
      backgroundColor: "#47b4fc",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  imageButtonRight: {
    color: "rgb(0, 153, 255)",
    position: "absolute",
    top: "45%",
    zIndex: 2,
    right: 10,
  },
  imageButtonLeft: {
    color: "rgb(0, 153, 255)",
    position: "absolute",
    top: "45%",
    zIndex: 2,
    left: 10,
  },
});
