import { createBrowserRouter } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import { shopPageLoader } from "./loaders/productsLoaders";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ShopPage />,
        loader: shopPageLoader,
    },
]);

export default router;
