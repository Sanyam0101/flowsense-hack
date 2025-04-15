import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { InsightProvider } from "./context/InsightContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InsightProvider>
      <App />
    </InsightProvider>
  </React.StrictMode>
);
