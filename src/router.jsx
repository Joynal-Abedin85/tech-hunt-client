import {
    createBrowserRouter
  } from "react-router-dom";
import Mainlayout from "./pages/mainlayout/mainlayout";
import Home from "./pages/Users/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

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
        }
      ]
    },
    {
        path: 'dashoard',
        element: 
    }
  ]);

  export default router
  
  