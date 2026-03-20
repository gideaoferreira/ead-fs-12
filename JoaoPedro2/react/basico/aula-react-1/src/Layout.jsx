import { Outlet } from "react-router-dom";
import AppHeader from "./components/app-header/app-header.jsx";
import AppFooter from "./components/app-footer/app-footer.jsx";

function Layout(){
    return(
        <>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>
    )
}

export default Layout