import {
    createBrowserRouter
  } from "react-router-dom";
import Mainlayout from "./pages/mainlayout/mainlayout";
import Home from "./pages/Users/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashoard/Dashboard";
import Additems from "./pages/Users/Additems";

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
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'additems',
                element: <Additems></Additems>
            }
        ]
    }
  ]);

  export default router
  
  