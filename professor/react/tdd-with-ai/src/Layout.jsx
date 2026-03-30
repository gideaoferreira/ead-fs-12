import { Outlet } from 'react-router-dom'
import Header from './components/app-header/Header'
import Footer from './components/app-footer/Footer'
import MainContent from './components/app-main/MainContent'
import './assets/styles/layout.scss'

function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </div>
  )
}

export default Layout
