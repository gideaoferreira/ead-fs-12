import Kitchem from "../../../assets/images/icons/products-category/kitchen.png"
import Food from "../../../assets/images/icons/products-category/food.png"
import Gardening from "../../../assets/images/icons/products-category/gardening.png"
import Living from "../../../assets/images/icons/products-category/living.png"
import Picnic from "../../../assets/images/icons/products-category/picnic.png"
import Pet from "../../../assets/images/icons/products-category/pet.png"

function ProductCategories() {
    return (
        <div className="categories my-4 d-flex justify-content-between">
            <div className="card">
                <div className="card-body">
                    <img src={Kitchem} alt="" style={{ width: "64px"}}/>
                    <p className="m-0 text-center">Cozinha</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={Food} alt="" style={{ width: "64px"}}/>
                    <p className="m-0 text-center">Comida</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={Gardening} alt="" style={{ width: "64px"}}/>
                    <p className="m-0 text-center">Jardim</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={Living} alt="" style={{ width: "64px"}}/>
                    <p className="m-0 text-center">Sala de estar</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={Pet} alt="" style={{ width: "64px"}}/>
                    <p className="m-0 text-center">Para Pets</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={Picnic} alt="" style={{ width: "64px"}}/>
                    <p className="m-0 text-center">Lazer</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={Gardening} alt="" style={{ width: "64px"}}/>
                    <p className="m-0 text-center">Jardim</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column justify-content-center">
                    <img src={Living} alt="" style={{ width: "64px"}}/>
                    <p className="m-0">Sala de estar</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={Pet} alt="" style={{ width: "64px"}}/>
                    <p className="m-0 text-center">Para Pets</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={Picnic} alt="" style={{ width: "64px"}}/>
                    <p className="m-0 text-center">Lazer</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCategories