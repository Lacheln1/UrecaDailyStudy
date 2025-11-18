import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ValidationSample from "./ValidationSample.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ValidationSample />
    </StrictMode>
);
