import Bed from "../../../assets/images/icons/products.categories/bed.png"
import Kitchen from "../../../assets/images/icons/products.categories/kitchen.png"
import Mental from "../../../assets/images/icons/products.categories/mental.png"
import Pet from "../../../assets/images/icons/products.categories/pet.png"
import Picnic from "../../../assets/images/icons/products.categories/picnic.png"
import Trimming from "../../../assets/images/icons/products.categories/trimming.png"
import Ball from "../../../assets/images/icons/products.categories/ball.png"
import Bicycle from "../../../assets/images/icons/products.categories/bicycle.png"
import Cat from "../../../assets/images/icons/products.categories/cat.png"
import House from "../../../assets/images/icons/products.categories/house.png"


function ProductCategories() {
  return (
            <div className="categories my-4 d-flex justify-content-between"> 
                <div className="card">
            <div className="card-body"> 
                <img src={Bed} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">cama</p>
                  
                  </div>
                </div>
                      <div className="card">
            <div className="card-body"> 
                <img src={Kitchen} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">cozinha</p>
                  
                  </div>
                </div>
                      <div className="card">
            <div className="card-body"> 
                <img src={Mental} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">conhecimento</p>
                  
                  </div>
                </div>
                      <div className="card">
            <div className="card-body"> 
                <img src={Pet} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">pet</p>
                  
                  </div>
                </div>
                      <div className="card">
            <div className="card-body"> 
                <img src={Picnic} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">piquenique</p>
                  
                  </div>
                </div>
                             <div className="card">
            <div className="card-body"> 
                <img src={Trimming} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">aparador</p>
                  
                  </div>
                </div>
                                      <div className="card">
            <div className="card-body"> 
                <img src={Ball} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">bola</p>
                  
                  </div>
                </div>
                                      <div className="card">
            <div className="card-body"> 
                <img src={Bicycle} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">bicicleta</p>
                  
                  </div>
                </div>
                                      <div className="card">
            <div className="card-body"> 
                <img src={Cat} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">gato</p>
                  
                  </div>
                </div>
                                      <div className="card">
            <div className="card-body"> 
                <img src={House} alt="" style={{width: "64px"}} />
                  <p className="m-0 text-center">casa</p>
                  
                  </div>
                </div>
                </div>

  )
}
export default ProductCategories;