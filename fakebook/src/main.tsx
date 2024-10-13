import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login.tsx'
import Registration from './pages/Registration.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/feed',
      element: <App/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/registration',
      element: <Registration/>
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)

