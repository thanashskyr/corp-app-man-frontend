import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import App from "./App";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
