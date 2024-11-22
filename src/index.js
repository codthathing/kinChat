import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";
import App from "./pages/App";
import { NavigateContextProvider } from "./services/providers/navigateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigateContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavigateContextProvider>
  </StrictMode>
);
