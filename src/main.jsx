import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import router from './router'

import {
  RouterProvider,
} from "react-router-dom";
import router from './router';
import Authprovider from './pages/auth/Authprovider';


import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Authprovider>
      <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </Authprovider>
  </StrictMode>,
)
