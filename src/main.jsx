import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import EmployeePage from './pages/EmployeePage.jsx'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import EditEmployee from './pages/SearchEmployee.jsx'
import ChatPage from './pages/ChatPage.jsx'

const router = createBrowserRouter([
  {
    path:'/funcionarios',
    element:<EmployeePage/>
  },
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/editar',
    element:<EditEmployee/>
  },
  {
    path:'/chat',
    element:<ChatPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
