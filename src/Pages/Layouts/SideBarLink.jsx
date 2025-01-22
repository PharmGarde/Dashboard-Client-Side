import React from 'react';
import { 
  LayoutDashboard,  
} from 'lucide-react';

function SidebarLink({ title, isActive, onClick }) {

  return (
    <>
    <li>
      <button
        onClick={onClick}
        className={`w-full px-4 py-3 flex items-center space-x-3 rounded-lg transition-all duration-200 ease-in-out
          ${isActive 
            ? 'bg-[#007f5f] text-white shadow-lg' 
            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
          }
        `}
      >
        <LayoutDashboard className="w-5 h-5" />
        <span className="font-medium">{title}</span>
      </button>
    </li>
    </>

  );
}

export default SidebarLink;
