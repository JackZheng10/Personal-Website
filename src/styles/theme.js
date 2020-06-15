import { createMuiTheme } from "@material-ui/core";
import openSans from "typeface-open-sans";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [openSans],
      },
    },
  },
});

export default theme;
