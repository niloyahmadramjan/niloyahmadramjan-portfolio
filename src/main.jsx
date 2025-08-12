import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Router.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css' // important: import AOS CSS!

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true, // animation only once when scroll
    })
  }, [])

  return (
    <div
      style={{
        background:
          'linear-gradient(135deg, #1F5F99 0%, #A42D54 50%, #1F5F99 100%)',
        minHeight: '100vh',
      }}
    >
      <RouterProvider router={router} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
