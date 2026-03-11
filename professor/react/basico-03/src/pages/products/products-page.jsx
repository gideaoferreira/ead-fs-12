import { useEffect, useState } from "react"
import AppFilter from "./filter/app-filter"
import { Link } from "react-router-dom"

function ProductsPage() {
    const [products, setProducts] = useState([])
    const limitProducts = 20

    async function getProducts() {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limitProducts}`)
        const data = await response.json()
        setProducts(data)
    }

    function normalizeProductTile(title) {
        return title.slice(0, 20)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <AppFilter />
            <div className="mt-4">
                {
                    products.length > 0 ?
                        <div className="d-flex flex-wrap justify-content-between gap-4">
                            {
                                products.map((product, index) => (
                                    <div key={index}>
                                        <Link to={`/product/details/${product.id}`}>
                                            <div className="card" style={{ width: '14rem' }}>
                                                <div className="d-flex justify-content-center mt-3" style={{ minHeight: '160px' }}>
                                                    <img src={product.image} style={{ width: '80px' }} className="card-img-top object-fit-contain" alt="..." />
                                                </div>
                                                <div className="card-body">
                                                    <h6>{normalizeProductTile(product.title)} - {product.id}</h6>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <small>Preço</small>
                                                            <p>R$ {product.price}</p>
                                                        </div>
                                                        <a href="#" className="btn btn-sm btn-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
                                                                <path fill="currentColor" d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m3-14v3h-3v2h3v3h2v-3h3v-2h-3V7zm-3 16c.564 0 1 .436 1 1s-.436 1-1 1s-1-.436-1-1s.436-1 1-1m9 0c.564 0 1 .436 1 1s-.436 1-1 1s-1-.436-1-1s.436-1 1-1" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className="skeleton d-flex justify-content-between gap-4 flex-wrap">
                            {
                                Array.from({ length: limitProducts }).map((_, index) => (
                                        <div className="card" key={index} style={{ width: "230px" }}>
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
                                    
                                ))
                            }
                        </div>
                }
            </div>
        </>
    )
}

export default ProductsPage