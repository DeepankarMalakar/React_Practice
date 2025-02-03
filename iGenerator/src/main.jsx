import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from './Components/Form.jsx'
import Hero from './Components/Hero.jsx'

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [{
        path: "/",
        element: <Hero />
      },
      {
        path: "/form",
        element: <Form />
      }
    ]
    },
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
