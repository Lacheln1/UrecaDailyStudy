import { createBrowserRouter } from "react-router-dom";

import WeatherPage from "../weather/WeatherPage";
import MainLayout from "../layout/MainLayout";
import CampingPage from "../camping/CampingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>에러 임시 출력</div>,
    children: [
      {
        index: true,
        element: <WeatherPage />,
      },
      {
        path: "/camping",
        element: <CampingPage />,
      },
    ],
  },
]);
