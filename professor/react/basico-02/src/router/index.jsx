import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/app-layout";
import ProductPage from "../pages/products/products-page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <h1>Home</h1>,
            },
            {
                path: '/products',
                element: <ProductPage />,
            },
            {
                path: '/contact',
                element: <h2>Página de contato</h2>
            }
        ]
    },
])

export default router