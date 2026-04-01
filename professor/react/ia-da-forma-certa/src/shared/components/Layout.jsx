import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
              IA da Forma Certa
            </a>
          </div>
        </nav>
      </header>

      <main className="layout-main">
        {children}
      </main>

      <footer className="layout-footer">
        <div className="container-fluid text-center py-3">
          <p>&copy; 2026 IA da Forma Certa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
