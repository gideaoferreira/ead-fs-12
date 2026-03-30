import './footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              © {currentYear} TDD with AI. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted mb-0">Built with React + Bootstrap + TDD</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
