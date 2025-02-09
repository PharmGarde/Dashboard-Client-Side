import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Users from '../pages/Users';
import Pharmacies from '../pages/Pharmacies';
import Statistics from '../pages/Statistics';

export const router = createBrowserRouter([
  {
    path: '/admin',
    element: <DashboardLayout />,
    children: [
      {
        path: '',  // This makes statistics the default page for /admin
        element: <Statistics />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'pharmacies',
        element: <Pharmacies />
      }
    ]
  }
]);
