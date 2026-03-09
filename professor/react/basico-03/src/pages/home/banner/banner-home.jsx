import BannerO1 from "../../../assets/images/banners/prod-01.png"
import BannerO2 from "../../../assets/images/banners/prod-02.png"
import BannerO3 from "../../../assets/images/banners/prod-03.png"

function BannerHome() {
    return (
        <div className="banner">
            <div id="carouselExample" class="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={BannerO1}  alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={BannerO2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={BannerO3} alt="Third slide" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default BannerHome