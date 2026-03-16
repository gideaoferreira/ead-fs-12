import { Outlet } from "react-router-dom";
import Appmenu from "../menu/app-menu";
import AppFooter from "../footer/app-footer";

function AppLayout() {
  return (
    <>

    <header>
        <Appmenu />
    </header>
           <main className="container mt-4">

       <Outlet />
    </main>
    <footer>
        <AppFooter />
    </footer>
    </>
  )
}
export default AppLayout;