import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";   // يجعل الرابط يتحكم بالصفحة المعروضة (/ أو /admin)
import App from "./App.jsx";
import "./styles/theme.css";
import "./styles/base.css";
import "./styles/buttons.css";
import "./styles/animations.css";
import "./styles/cards.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);