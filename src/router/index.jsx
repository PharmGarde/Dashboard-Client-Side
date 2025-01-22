import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    }
])