import HomePage from "../../pages/home/home-page"
import CreateUser from "../../pages/user/create-user"

function AppMain() {
    return (
        <>
            <main className="container my-4">
                <CreateUser />
                <HomePage />
            </main>
        </>
    )
}

export default AppMain