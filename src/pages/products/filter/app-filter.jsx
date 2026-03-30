function AppFilter() {

    return (
        
        <div className="d-flex justify-content-between ">
            <div className="search d-flex gap-2">
                <input type="text" className="form-control form-control-sm" />
                <button className="btn btn-primary btn-sm " type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeWidth="2" d="m15 15l7 7zm-5.5 2a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15Z" /></svg>
                </button>

            </div>
            <div className="dropdown">
                <button className="btn btn-secondary btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="19" r="1" />
                    </g>
                    </svg>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Maior valor</a></li>
                    <li><a className="dropdown-item" href="#">Menor valor</a></li>
                    <li><a className="dropdown-item" href="#">Mais vendidos</a></li>
                </ul>
            </div>
        </div>
        
    )
} 

export default AppFilter;