import { createMuiTheme } from "@material-ui/core";
import tWeb from "typeface-titillium-web";

//todo: work on color pallette

const theme = createMuiTheme({
  typography: {
    fontFamily: "Titillium Web",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [tWeb],
      },
    },
  },
});

export default theme;
