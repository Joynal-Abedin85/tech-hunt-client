import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import router from './router'

import {
  RouterProvider,
} from "react-router-dom";
import router from './router';
import Authprovider from './pages/auth/Authprovider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
