import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ValidationSample from "./ValidationSample.jsx";
import PracticeUseEffect from "./practiceUseEffect.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <PracticeUseEffect />
    </StrictMode>
);
