function BannerHome () {
    return (
        <div className="banner">
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://t4.ftcdn.net/jpg/17/51/82/57/360_F_1751825780_sY8Vt0gzh8Vn8h92V2nN3ckUtJIla01Y.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://t4.ftcdn.net/jpg/09/46/87/79/360_F_946877927_XISwDJJzmACgj2PgzSQGBcceHHV4btXd.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.shutterstock.com/image-photo/details-still-life-cup-tea-260nw-2063945102.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
            </div>
        </div>
    )

}

export default BannerHome
