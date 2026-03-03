import { Outlet } from "react-router-dom";
import AppMenu from "../menu/app-menu"

function AppLayout() {
    return (
        <>
            <header>
                <AppMenu />
            </header>
            
            <main className="container mt-4">
                <Outlet />
            </main>

            <footer className="d-flex justify-content-center border-top">
                petlove.com.br
            </footer>
        </>
    )
}

export default AppLayout