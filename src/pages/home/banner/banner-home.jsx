import bannerpet1 from "../../../assets/images/banners/bannerpet1.png"
import bannerpet2 from "../../../assets/images/banners/bannerpet2.png"
import bannerpet3 from "../../../assets/images/banners/bannerpet3.png"

function BannerHome() {
  return (
    <div className="banner">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img className="d-block w-100" src={bannerpet1} alt="first slide" />
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={bannerpet2} alt="second slide" />
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={bannerpet3} alt="third slide" />
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
}

export default BannerHome;