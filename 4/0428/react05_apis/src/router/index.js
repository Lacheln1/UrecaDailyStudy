import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>에러 임시 출력</div>,
    // children:[
    //     {}
    // ]
  },
]);
