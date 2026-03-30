import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
    const [product, setProduct] = useState([]);
    const params = useParams()

    async function getProductDetails() {
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        //setTimeout(getProductDetails, 3000);
        getProductDetails();
    }, [])

    return (
        <>
            {
                product.id ?
                    <div className="row">
                        <div className="col-6">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="col-6">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <div className="rate d-flex gap-4  ">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10z" />
                                    </svg>
                                    <small>{product.rating.rate}</small>
                                </div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z" />
                                        <set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1" /></path>
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        <path stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" /></path>
                                        <path stroke-dasharray="2" stroke-dashoffset="2" d="M8 11h0.01"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0" /></path>
                                        <path stroke-dasharray="2" stroke-dashoffset="2" d="M12 11h0.01"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0" /></path>
                                        <path stroke-dasharray="2" stroke-dashoffset="2" d="M16 11h0.01"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="2;0" /></path>
                                    </g>
                                </svg>
                                    <small>{product.rating.count}</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-5">
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
                    :
                    <div className="row">
                        <div className="col-6">
                            <p className="placeholder-glow">
                                <span style={{ height: "400px" }} className="placeholder col-12 placeholder-lg"></span>
                            </p>
                        </div>
                        <div className="col-6">
                            <p class="placeholder-glow">
                                <span class="placeholder col-12"></span>
                            </p>
                            <p class="placeholder-glow">
                                <span class="placeholder col-12"></span>
                            </p>
                            <div className="rate d-flex gap-12">
                                <div>
                                    <p class="placeholder-glow">
                                        <span class="placeholder col-12"></span>
                                    </p>
                                </div>
                                <div>
                                    <p class="placeholder-glow">
                                        <span class="placeholder col-12"></span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )

}

export default ProductDetailsPage