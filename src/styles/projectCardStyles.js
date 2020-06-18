export default (theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    height: "auto",
    width: 600,
    [theme.breakpoints.down(900)]: {
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
});
