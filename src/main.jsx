import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import theme from "./theme/theme";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline /> {/* css reset */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
