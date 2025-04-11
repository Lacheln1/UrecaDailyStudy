import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Default from "./layout/Default";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";
import MainSubPage from "./pages/MainSubPage";

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      { path: "/", element: <MainPage />,children:[{path:"",element:<MainSubPage/>}] },
      { path: "/about", element: <AboutPage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/blog", element:<BlogPage/>},
    ],
  },
  {path:"*",element:<NotFound/>}
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
