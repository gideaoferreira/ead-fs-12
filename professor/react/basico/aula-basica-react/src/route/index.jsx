import { createBrowserRouter } from "react-router";

import HomePage from "../pages/home/home-page";
import CreateUser from "../pages/user/create-user";
import Layout from "../Layout";
import ContactPage from "../pages/contact/contact-page";

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
        {
            path: '/contact',
            element: <ContactPage />
        },
    ]
  }
]);

export default router
