import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

reportWebVitals();
