import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import "./index.css"; // Include styles for dark/light themes

// Layouts and Pages
import Root from "./Component/Layout/Root";
import ErrorPage from "./Component/Pages/ErrorPage";
import Home from "./Component/Pages/Home";
import AddVisa from "./Component/Pages/AddVisa";
import AllVisas from "./Component/Pages/AllVisas";
import MyAddedVisas from "./Component/Pages/MyAddedVisas";
import MyVisaApplications from "./Component/Pages/MyVisaApplications";
import AllVisaDetails from "./Component/Pages/AllVisaDetails";
import Signup from "./Component/LogSign/Signup";
import Login from "./Component/LogSign/Login";
import ForgetPassword from "./Component/LogSign/ForgetPassword";
import MyProfile from "./Component/LogSign/MyProfile";
import AllVisaDetailsHome from "./Component/Pages/Cards/AllVisaDetailsHome";

// Providers and Routes
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "addVisa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        ),
      },
      {
        path: "allVisas",
        element: <AllVisas />,
        loader: () => fetch("http://localhost:5000/sunflower"),
      },
      {
        path: "myAddedVisas",
        element: (
          <PrivateRoute>
            <MyAddedVisas />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/sunflower"),
      },
      {
        path: "myVisaApplications",
        element: (
          <PrivateRoute>
            <MyVisaApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "allVisas/allVisaDetails/:id",
        element: (
          <PrivateRoute>
            <AllVisaDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sunflower/${params.id}`),
      },
      {
        path: "/allVisasHome/allVisaDetailsHome/:id",
        element: (
          <PrivateRoute>
            <AllVisaDetailsHome />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sunflower/${params.id}`),
      },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "forgetPassword", element: <ForgetPassword /> },
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

// Render Application
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

  </StrictMode>
);
