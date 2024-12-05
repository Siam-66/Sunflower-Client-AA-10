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
      },
      {
        path: "myAddedVisas",
        element: <MyAddedVisas></MyAddedVisas>,
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
