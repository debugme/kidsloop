import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import "./language/initialize";
import { GlobalStyle, ThemeProvider } from "./theme";
import Application from "./components/application";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
