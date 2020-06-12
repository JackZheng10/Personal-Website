export default (theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  greeting: {
    textAlign: "center",
  },
  profilePic: {
    [theme.breakpoints.down(650)]: {
      width: "90vw",
      height: "auto",
    },
  },
});

/*
  name: {
      color: "white",
    },
    greenButton: {
      backgroundImage: "linear-gradient(to right, #58ed76, #014f11) ",
      color: "white",
    },
    redButton: {
      backgroundImage: "linear-gradient(to right, #fa4b4b, #750000) ",
      color: "white",
    },
    card: {
      width: "auto",
    },
    cardHeader: {
      textAlign: "center",
      backgroundColor: "rgb(249, 122, 22)",
    },
    cardContent: {
      textAlign: "center",
      backgroundColor: "rgb(245, 146, 70)",
    },
    cardActions: {
      justifyContent: "center",
    },
  */