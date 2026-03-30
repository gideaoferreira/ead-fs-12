import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import Bootstrap CSS and dependencies
import 'bootstrap'
import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
