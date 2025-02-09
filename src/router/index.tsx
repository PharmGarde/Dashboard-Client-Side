import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Pharmacies from "../pages/Pharmacies";
import Statistics from "../pages/Statistics";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Statistics />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "pharmacies",
        element: <Pharmacies />,
      },
    ],
  },
]);
