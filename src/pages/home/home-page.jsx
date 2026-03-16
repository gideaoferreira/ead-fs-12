import Bed from "../../assets/images/icons/products.categories/bed.png"

function HomePage() {
    return (
       <div className="home">
        <div className="banner">
           <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbih1DMcjcT2X8w3BEVxZ0Vdf2K7WVM_Tuew&s" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpCMnvzXS4NShCiEDX91BxHdd0I2r3A-CmQ&s" className="d-block w-100" alt="first slide"/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbih1DMcjcT2X8w3BEVxZ0Vdf2K7WVM_Tuew&s" className="d-block w-100" alt=" second slide"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>
        </div>
        <div className="categories mt-4">
            <div className="card" style={{width: "64px"}}>
              <img src={Bed} alt="Bed" />
            </div>
       </div>
        <div className="offers">
            ofertas
        </div>
        <div className="most-sold">
            mais vendidos

      </div>
        <div className="newsletter">
            receba nossas novidades
        </div>
       </div>
            )
    }
export default HomePage