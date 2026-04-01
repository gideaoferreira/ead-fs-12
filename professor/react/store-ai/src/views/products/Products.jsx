import React, { useState, useEffect } from 'react';
import Layout from '../../shared/components/Layout';

/**
 * Products page component
 * Displays all available products
 */
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Placeholder for API call
    // const fetchProducts = async () => {
    //   try {
    //     const data = await get('/api/products');
    //     setProducts(data);
    //   } catch (error) {
    //     console.error('Failed to fetch products:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchProducts();

    setLoading(false);
  }, []);

  return (
    <Layout className="products-page">
      <div className="container-fluid py-5">
        <h1 className="mb-4">Our Products</h1>

        {loading ? (
          <div className="text-center">
            <p>Loading products...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <strong>${product.price}</strong>
                    </p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-info">
            No products available at the moment.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
