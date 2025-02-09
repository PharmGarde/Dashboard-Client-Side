import { Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Login from '../pages/Login';
import Users from '../pages/Users';
import Pharmacies from '../pages/Pharmacies';
import Statistics from '../pages/Statistics';
import { AuthProvider } from '../context/AuthContext';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = () => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to="/admin" /> : <Outlet />;
};

export const routes = [
  {
    element: <AuthProvider />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: '/login',
            element: <Login />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/admin',
            element: <DashboardLayout />,
            children: [
              {
                path: '',
                element: <Statistics />,
              },
              {
                path: 'users',
                element: <Users />,
              },
              {
                path: 'pharmacies',
                element: <Pharmacies />,
              },
            ],
          },
        ],
      },
      {
        path: '/',
        element: <Navigate to="/admin" replace />,
      },
    ],
  },
];
