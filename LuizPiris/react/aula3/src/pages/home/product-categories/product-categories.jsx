import Kitchen from '../../../assets/images/products-category/kitchen.png';
import Food from '../../../assets/images/products-category/food.png';
import Gardening from '../../../assets/images/products-category/gardening.png';
import Living from '../../../assets/images/products-category/living.png';
import Picnic from '../../../assets/images/products-category/picnic.png';
import Pet from '../../../assets/images/products-category/pet.png';

function ProductCategories () {
    return (
        <div className="categories my-4 d-flex justify-content-between">
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Kitchen} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Cozinha</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Food} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Comida</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Gardening} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Jardim</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Living} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Sala de Estar</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Picnic} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Lazer</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Pet} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Para Pets</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Kitchen} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Cozinha</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Food} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Comida</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Gardening} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Jardim</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center">
                    <img src={Living} alt="Cozinha" style={{width: '64px'}}/>
                    <p className='m-0 text-center'>Sala de Estar</p>
                </div>
            </div>
        </div>
    )

}

export default ProductCategories
