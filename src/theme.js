import { createMuiTheme } from "@material-ui/core";
import poppins from "typeface-poppins";
import barlow from "typeface-barlow";
import openSans from "typeface-open-sans";
import ptSans from "typeface-pt-sans";

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
