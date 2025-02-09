import { Link, useLocation } from 'react-router-dom';
import { 
  UsersIcon, 
  BuildingStorefrontIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon 
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/admin',
      name: 'Statistics',
      icon: ChartBarIcon
    },
    {
      path: '/admin/users',
      name: 'Users',
      icon: UsersIcon
    },
    {
      path: '/admin/pharmacies',
      name: 'Pharmacies',
      icon: BuildingStorefrontIcon
    },
    {
      path: '/admin/prescriptions',
      name: 'Prescriptions',
      icon: ClipboardDocumentListIcon
    }
  ];

  return (
    <aside className="fixed left-0 h-screen w-64 bg-white shadow-sm pt-20">
      <nav className="mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-6 py-3 mx-4 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-teal-50 text-teal-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
