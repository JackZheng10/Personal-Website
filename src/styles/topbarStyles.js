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
    [theme.breakpoints.down(265)]: {
      display: "none !important",
    },
  },
  logo: {
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down(320)]: {
      display: "none !important",
    },
  },
  tooltip: {
    position: "relative",
    [theme.breakpoints.down(265)]: {
      display: "none",
    },
  },
  tip: {
    width: 178,
    backgroundColor: "#575757",
    opacity: 0.8,
  },
  tipContainer: {
    top: 20,
    left: -130,
    position: "absolute",
  },
  tipText: {
    padding: 5,
    color: "white",
  },
  arrowUp: {
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "8px solid #575757",
    opacity: 0.8,
  },
  arrowContainer: {
    top: 12,
    left: -28,
    position: "absolute",
  },
  switch: {
    [theme.breakpoints.down(265)]: {
      display: "none",
    },
  },
});
