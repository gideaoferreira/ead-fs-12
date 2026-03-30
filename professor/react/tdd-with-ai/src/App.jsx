import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
