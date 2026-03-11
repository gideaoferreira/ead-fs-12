import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/app-layout";
import HomePage from "../pages/home/home-page";
import ProductsPage from "../pages/products/products-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/products",
                element: <ProductsPage />
            }
        ]
    }
]);

export default router