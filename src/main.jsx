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
import AllVisaDetails from './Component/Pages/AllVisaDetails';
import Signup from './Component/LogSign/Signup';
import Login from './Component/LogSign/Login';
import ForgetPassword from './Component/LogSign/ForgetPassword';
import MyProfile from './Component/LogSign/MyProfile';
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

      {
        path: 'allVisas/allVisaDetails/:id',
        element: <AllVisaDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/sunflower/${params.id}`)
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      
      
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />  
</StrictMode>,
)
