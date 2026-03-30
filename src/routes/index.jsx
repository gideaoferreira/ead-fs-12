import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../componentes/layout/app-layout";
import HomePage from "../pages/home/home-page";
import ProductsPage from "../pages/products/products-page";
import Appmenu from "../componentes/menu/app-menu";
import ProductDetailsPage from "../pages/products/datails/product-datails-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/products",
                element: <ProductsPage />
            },
            {
                path: "/product/datails/:id",
                element: <ProductDetailsPage />
            }
        ]
    }
])

export default router