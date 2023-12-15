import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModeProvider } from "./components/ThemeGlobal/ModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ModeProvider>
      <App />
    </ModeProvider>
  </BrowserRouter>
);
