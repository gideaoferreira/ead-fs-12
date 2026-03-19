import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home-page"
import { CreateUser } from "../pages/user/create-user";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: '/user',
            element: <CreateUser />
        },
    ]
  }
]);

export default router