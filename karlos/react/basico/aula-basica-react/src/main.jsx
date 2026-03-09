import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppHeader from './components/app/header/app.header'
import appmain from './components/app.main/app.main'
import AppFooter from './components/app.footer/app.footer'
import { Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
       <AppHeader />
        <appMain />
        <AppFooter />

      </div>
  </StrictMode>,
)
