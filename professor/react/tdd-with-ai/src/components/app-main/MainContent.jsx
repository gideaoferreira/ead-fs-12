import './main-content.scss'

function MainContent({ children }) {
  return (
    <main className="app-main">
      <div className="container mt-4">
        {children}
      </div>
    </main>
  )
}

export default MainContent
