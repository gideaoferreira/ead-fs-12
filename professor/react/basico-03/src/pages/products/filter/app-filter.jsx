function AppFilter() {
    return (
        <div className="d-flex justify-content-between">
            <div className="search d-flex gap-1">
                <input type="text" className="form-control form-control-sm" />
                <button className="btn btn-primary btn-sm" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" d="m11.271 11.978l3.872 3.873a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.708l-3.565-3.564c2.38-2.747 2.267-6.923-.342-9.532c-2.73-2.73-7.17-2.73-9.898 0s-2.728 7.17 0 9.9a6.96 6.96 0 0 0 4.949 2.05a.5.5 0 0 0 0-1a5.96 5.96 0 0 1-4.242-1.757a6.01 6.01 0 0 1 0-8.486a6.004 6.004 0 0 1 8.484 0a6.01 6.01 0 0 1 0 8.486a.5.5 0 0 0 .034.738" />
                    </svg>
                </button>
            </div>
            <div className="dropdown">
                <button className="btn btn-light btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </g>
                    </svg>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item active" href="#">Maior valor</a></li>
                    <li><a className="dropdown-item" href="#">Menor valor</a></li>
                    <li><a className="dropdown-item" href="#">Mais vendidos</a></li>
                </ul>
            </div>
        </div>
    )
}

export default AppFilter