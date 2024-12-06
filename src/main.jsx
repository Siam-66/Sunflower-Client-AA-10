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

import AllVisaDetails from './Component/Pages/AllVisaDetails';
import Signup from './Component/LogSign/Signup';
import Login from './Component/LogSign/Login';
import ForgetPassword from './Component/LogSign/ForgetPassword';
import MyProfile from './Component/LogSign/MyProfile';
import AllVisaDetailsHome from './Component/Pages/Cards/AllVisaDetailsHome';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

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
        element:<PrivateRoute>
          <AddVisa></AddVisa>
        </PrivateRoute>,
      },
      {
        path: "allVisas",
        element: <AllVisas></AllVisas>,
        loader: () => fetch ('http://localhost:5000/sunflower')
      },
      {
        path: "myAddedVisas",
        element: <PrivateRoute>
          <MyAddedVisas></MyAddedVisas>
        </PrivateRoute>,
        loader: () => fetch ('http://localhost:5000/sunflower')

        
      },
      {
        path: "myVisaApplications",
        element: <PrivateRoute>
          <MyVisaApplications></MyVisaApplications>
        </PrivateRoute>,
      },

      {
        path: 'allVisas/allVisaDetails/:id',
        element: <PrivateRoute>
          <AllVisaDetails />
        </PrivateRoute> ,
        loader: ({ params }) => fetch(`http://localhost:5000/sunflower/${params.id}`)
      },
      {
        path: '/allVisasHome/allVisaDetailsHome/:id',
        element:<PrivateRoute>
          <AllVisaDetailsHome />
        </PrivateRoute>,
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
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute> ,
      },
      
      
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />  
    </AuthProvider>

</StrictMode>,
)
