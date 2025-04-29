import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import MainLayout from "./layout/MainLayout.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* 개발환경에서만 데브툴이 나오게 하기 */}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </StrictMode>
);
