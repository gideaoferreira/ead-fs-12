import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppHeader from './components/app-header/app-header'
import AppMain from './components/app-main/app-main'
import AppFooter from './components/app-footer/app-footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  </StrictMode>,
)
