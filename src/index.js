import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import App from "./App";
import { NavigateContextProvider } from "./services/providers/navigateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavigateContextProvider>
        <App />
      </NavigateContextProvider>
    </BrowserRouter>
  </StrictMode>
);
