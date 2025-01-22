import React from 'react';
import { Trophy } from 'lucide-react';
import SidebarLink from './SideBarLink';
import ProfileSection from './ProfilSection';

function Sidebar({ tabs, activeTab, setActiveTab }) {
  const handleTabClick = (tabId) => (e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };


  return (
    <aside className="fixed left-0 top-0 h-full w-64 text-white shadow-xl flex flex-col" style={{ background: "#007f5f" }}>
      <div className="px-6 py-8">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#eefffb] to-[#c3fff076] text-transparent bg-clip-text">
            Pharm Gard
          </span>
        </div>
      </div>
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <SidebarLink key={tab.id} title={tab.title} isActive={activeTab === tab.id} onClick={handleTabClick(tab.id)}/>
          ))}
        </ul>
      </nav>
      <ProfileSection />
    </aside>
  );
}

export default Sidebar;
