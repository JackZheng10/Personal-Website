export default (theme) => ({
  greeting: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});
