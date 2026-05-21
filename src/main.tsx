import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import DesktopEnvironment from "./applications/system/desktop-environment/DesktopEnvironment";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DesktopEnvironment />
  </StrictMode>,
);
