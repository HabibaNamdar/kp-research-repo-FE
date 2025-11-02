import React from "react";
import {
  Home,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#004d66] text-white flex flex-col min-h-screen">
      {/* Header */}
      <div className="p-6 font-bold text-lg leading-tight text-center border-b border-[#006b80]">
        RESEARCH REPOSITORY <br /> & SCIENTIST DIRECTORY <br /> FOR KP
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        <div className="flex items-center space-x-3 bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
          <Home size={18} /> <span>Dashboard</span>
        </div>
        <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
          <Users size={18} /> <span>User Management</span>
        </div>
        <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
          <FileText size={18} /> <span>Publications</span>
        </div>
        <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
          <BarChart3 size={18} /> <span>Analytics</span>
        </div>
        <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
          <MessageSquare size={18} /> <span>Feedback / Report</span>
        </div>
        <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
          <Settings size={18} /> <span>Settings</span>
        </div>
        <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
          <HelpCircle size={18} /> <span>Help / Support</span>
        </div>
      </nav>

      {/* Logout */}
      <div className="px-4 py-3 border-t border-gray-500 flex items-center space-x-3 cursor-pointer hover:bg-[#006b80] rounded-md">
        <LogOut size={18} /> <span>Logout</span>
      </div>
    </aside>
  );
};

export default Sidebar;
