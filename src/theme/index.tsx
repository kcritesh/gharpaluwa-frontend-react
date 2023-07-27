import { createTheme } from "@mui/material";
import palette from "./pallete";
import ComponentsOverrides from "./overrides";

const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: "inherit",
  },
});

theme.components = ComponentsOverrides(theme);
export default theme;
