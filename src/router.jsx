import {
    createBrowserRouter
  } from "react-router-dom";
import Mainlayout from "./pages/mainlayout/mainlayout";
import Home from "./pages/Users/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashoard/Dashboard";
import Additems from "./pages/Users/Additems";
import Alluser from "./pages/admin/Alluser";
import Product from "./pages/navpage/Product";
import Myproducts from "./pages/Users/Myproducts";
import Details from "./components/Details";
import Myprofile from "./pages/Users/Myprofile";

   const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'products',
            element: <Product></Product>
        }, 
        {
            path: 'details/:id',
            element: <Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/tech/${params.id}`)
          },
      ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // user route 
            {
                path: 'additems',
                element: <Additems></Additems>
            },
            {
                path: 'myproduct',
                element: <Myproducts></Myproducts>
            },
            {
                path: 'myprofile',
                element: <Myprofile></Myprofile>
            },

            //admin  route
            {
                path: 'alluser',
                element: <Alluser></Alluser>
            },
            
        ]
    }
  ]);

  export default router
  
  