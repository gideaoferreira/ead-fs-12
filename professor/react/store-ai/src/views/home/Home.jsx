import React from 'react';
import Layout from '../../shared/components/Layout';

/**
 * Home page component
 * Main landing page for the Store AI application
 */
const Home = () => {
  return (
    <Layout className="home-page">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="mb-4">Welcome to Store AI</h1>
            <p className="lead mb-4">
              Discover a new way to shop with our AI-powered platform. 
              Browse through our curated collection of products and enjoy 
              an exceptional shopping experience.
            </p>
            <button className="btn btn-primary btn-lg">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
