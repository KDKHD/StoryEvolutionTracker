import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5294ff",
      contrastText: "white"
    },
    secondary: {
      main: "#989898",
    },
  },

});

export default theme;
