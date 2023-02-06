import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import React from "react";

import DEFAULT_THEME from "@/constants/defaultTheme";

function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={DEFAULT_THEME}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
export default ThemeProvider;
