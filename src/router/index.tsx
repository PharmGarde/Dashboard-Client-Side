import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Users from "../pages/Users";
import Pharmacies from "../pages/Pharmacies";

export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
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
