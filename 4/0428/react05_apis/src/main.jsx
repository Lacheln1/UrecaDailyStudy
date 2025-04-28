import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import MainLayout from "./layout/MainLayout.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  </StrictMode>
);
