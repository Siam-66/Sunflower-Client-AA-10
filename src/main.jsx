import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './Component/Pages/ErrorPage';
import Home from './Component/Pages/Home';
import Root from './Component/Layout/Root';
import AddVisa from './Component/Pages/AddVisa';
import AllVisas from './Component/Pages/AllVisas';
import MyAddedVisas from './Component/Pages/MyAddedVisas';
import MyVisaApplications from './Component/Pages/MyVisaApplications';
import AllCardsDetails from './Component/Pages/Cards/AllCardsDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addVisa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "allVisas",
        element: <AllVisas></AllVisas>,
        loader: () => fetch ('http://localhost:5000/sunflower')
      },
      {
        path: "allCardsDetails",
        element: <AllCardsDetails></AllCardsDetails>,
      },
      {
        path: "myAddedVisas",
        element: <MyAddedVisas></MyAddedVisas>,
        loader: () => fetch ('http://localhost:5000/sunflower')
        
      },
      {
        path: "myVisaApplications",
        element: <MyVisaApplications></MyVisaApplications>,
      },
      
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />  
</StrictMode>,
)
