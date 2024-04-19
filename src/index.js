import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import Search from './Components/Search';
import Classcompo from './Components/Classcompo';
import Error from './Components/Error';
import Navbar from './Components/Navbar'
import Shimer from './Components/Shimer';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';

const TasteTrove=()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}



const myRoute=createBrowserRouter([
    {
        path:"/",
        element:<TasteTrove/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/search",
                element:<Search/>
            },
            {
                path:"/shimer",
                element:<Shimer/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/about",
                element:<About/>
            }
        ],
        errorElement:<Error/>
    },
   
])
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={myRoute}/>)