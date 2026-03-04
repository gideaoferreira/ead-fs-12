import { Outlet } from "react-router";
import AppHeader from "./components/app-header/app-header";
import AppFooter from "./components/app-footer/app-footer";

function Layout() {
    return (
        <>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>
    )
}

export default Layout