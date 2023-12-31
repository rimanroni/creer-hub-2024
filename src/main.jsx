import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root.jsx'
import Home from './components/Home.jsx'
import Jobs from './components/Jobs.jsx'
import Blog from './components/Blog.jsx'
import ErrorPages from './components/ErrorPages.jsx'
import JobsDetils from './JobsDetils.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
       },
       {
        path:'/applied',
        element:<Jobs/>,
        loader: () =>fetch('/jobs.json')
       },
       {
        path:'/blog', 
        element:<Blog/>
       },
       {
        path:'/job/:id',
        element:<JobsDetils/>,
        loader: () => fetch('/jobs.json')
       }
    ],
    errorElement:<ErrorPages/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
