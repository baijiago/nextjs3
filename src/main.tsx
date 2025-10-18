import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import "@/styles/globals.css";

// Version and build info for cache busting
console.log("App Version: 1.0.1 - Build: 2025-10-18T12:50:00Z");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
