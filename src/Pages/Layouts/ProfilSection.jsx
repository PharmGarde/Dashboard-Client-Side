import React from 'react';
import {LogOut, User } from 'lucide-react';

export default function ProfileSection() {

  return (
    <div className="border-t border-black pt-4 mt-4">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#007f5f] flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[#007f5f6c]">{localStorage.getItem('userName')}</span>
            <span className="text-xs text-gray-400">Event Organizator</span>
          </div>
        </div>
        
      </div>
      
      <button className="mt-4 w-full px-4 py-2 flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}


