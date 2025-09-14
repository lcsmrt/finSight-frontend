import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("root element not foundl.");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
