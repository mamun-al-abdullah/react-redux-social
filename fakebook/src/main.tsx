import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/about',
      element: <h2>About Page</h2>
    },
    {
      path: '/contact',
      element: <h2>Contact Page</h2>
    },
    // Add more routes as needed
  ]
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

