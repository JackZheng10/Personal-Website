export default (theme) => ({
  footer: {
    marginTop: "auto",
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(0, 153, 255) 15%, rgb(0, 153, 255) 50%, rgb(0, 153, 255) 100%)",
    backgroundColor: "rgb(0, 153, 255)",
    boxShadow: "0 0 20px",
  },
  name: {
    color: "white",
    paddingTop: 10,
  },
  GH: {
    height: 52,
    width: 125,
    cursor: "pointer",
  },
  LI: {
    height: 34,
    width: 138,
    cursor: "pointer",
  },
  email: {
    height: 52,
    width: 52,
    cursor: "pointer",
  },
  centerText: {
    textAlign: "center",
  },
  GHMobile: {
    color: "black",
  },
  LIMobile: {
    color: "#2464b4",
  },
  emailMobile: {
    color: "black",
  },
});

//todo: at ~300 px the pictures become too large and it bleeds
