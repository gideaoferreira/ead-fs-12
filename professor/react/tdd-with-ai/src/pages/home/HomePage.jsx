import MostSoldProducts from '../../components/most-sold-section/MostSoldProducts'

function HomePage() {
  return (
    <div className="home-page">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1>Welcome to TDD with AI</h1>
          <p className="lead mt-3">
            This project demonstrates React development with Bootstrap styling and Test-Driven Development (TDD) practices.
          </p>

          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Getting Started</h5>
              <p className="card-text">
                This is a starter React project with Bootstrap integrated and configured for TDD.
              </p>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">✅ React 19.2.4</li>
                <li className="list-group-item">✅ Bootstrap 5.3.8</li>
                <li className="list-group-item">✅ Vitest for testing</li>
                <li className="list-group-item">✅ React Router for navigation</li>
                <li className="list-group-item">✅ Sass for styling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <MostSoldProducts />
      </div>
    </div>
  )
}

export default HomePage
