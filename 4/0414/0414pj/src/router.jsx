import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Default from "./layout/Default";
import NotFound from "./pages/NotFound";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import { getProductById } from "./api/productApi";
import { detailPageLoader } from "./loaders/productsLoaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/cart", element: <CartPage /> },
      {
        path: "/detail/:productId",
        element: <DetailPage />,
        loader: detailPageLoader,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
