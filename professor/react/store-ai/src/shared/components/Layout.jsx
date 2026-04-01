import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style/global.css';

/**
 * Layout component that wraps all application pages
 * Provides consistent structure and styling
 */
const Layout = ({ children, className = '' }) => {
  return (
    <div className={`layout-wrapper ${className}`}>
      <header className="layout-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Store AI
            </a>
          </div>
        </nav>
      </header>

      <main className="layout-main">
        {children}
      </main>

      <footer className="layout-footer">
        <div className="container-fluid text-center py-3">
          <p>&copy; 2026 Store AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
