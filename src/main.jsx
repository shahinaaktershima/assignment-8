import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import Error from './component/Error';
import BlogDetails from './component/Home/Blogs/BlogDetails';


const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        
        },
        {path:'/card/:id',
        element:<BlogDetails></BlogDetails>,
        loader:()=>fetch('../fakeData.json')}
          
        
        
    ]
    
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
