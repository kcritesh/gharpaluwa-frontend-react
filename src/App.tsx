import React from "react";

// third party libraries
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { useDispatch } from "react-redux";

import CustomAlert from "./components/CustomAlert";


// defaultTheme
import theme from "./theme";

// routing import
import Router from "./routes";
import { loadUserStart } from "./store/auth/auth.actions";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadUserStart());
  }, []);
  
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CustomAlert />
          <Router />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
}

export default App;
