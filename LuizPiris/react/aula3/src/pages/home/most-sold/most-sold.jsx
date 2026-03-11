import { useEffect, useState } from "react";

function MostSold () {
    const [products, setProducts] = useState([]);

    async function getOffersProducts () {
        const response  = await fetch('https://fakestoreapi.com/products?limit=5&sort=desc');
        const data = await response.json();
        setProducts(data);
    }

    function normalizeProductTile (title) {
        return title.slice(0, 20)
    }

    useEffect(() => {
        setTimeout(() => {getOffersProducts();}, 4000)
    }, [])
    
    return (
        <div className="products my-4">
            <h3>Mais Vendidos</h3><br/>
            {products.length > 0 
                ? 

                <div className="d-flex flex-wrap justify-content-between gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="card" style={{width: '14rem'}}>
                                <div className="d-flex justify-content-center mt-3" style={{minHeight: '160px'}}>
                                    <img src={product.image} style={{width: '80px'}} className="card-img-top object-fit-contain" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h6>{normalizeProductTile(product.title)}</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <small>Preços</small>
                                            <p>R$ {product.price}</p>
                                        </div>
                                        <a href="#" className="btn btn-sm btn-primary">
                                            COMPRAR
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div> 

                : 
                
                <div className="skeleton d-flex justify-content-between">
                <div className="card" style={{width: '200px'}}>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                        </p>
                        <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                </div>
                <div className="card" style={{width: '200px'}}>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                        </p>
                        <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                </div>
                <div className="card" style={{width: '200px'}}>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                        </p>
                        <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                </div>
                <div className="card" style={{width: '200px'}}>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                        </p>
                        <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                </div>
                <div className="card" style={{width: '200px'}}>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                        </p>
                        <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                </div>
                <div className="card" style={{width: '200px'}}>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                        </p>
                        <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                </div>
            </div>
           }
        </div>
    )
}

export default MostSold