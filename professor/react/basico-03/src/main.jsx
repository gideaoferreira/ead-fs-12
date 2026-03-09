import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./assets/style/main.scss"
import "bootstrap"
import "@popperjs/core"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import router from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
