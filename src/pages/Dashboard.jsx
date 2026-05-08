import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { 
  LayoutDashboard, 
  Activity, 
  Heart, 
  TrendingUp, 
  Settings, 
  LogOut, 
  Bell, 
  Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Import new components
import Overview from '../components/dashboard/Overview';
import Workout from '../components/dashboard/Workout';
import Recovery from '../components/dashboard/Recovery';
import Performance from '../components/dashboard/Performance';
import SettingsView from '../components/dashboard/SettingsView';

const Dashboard = () => {
  const { currentUser: user } = useAuth();
  const [activeTab, setActiveTab] = useState('Overview');
  const handleLogout = () => signOut(auth);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Overview" },
    { icon: <Activity size={20} />, label: "Workout" },
    { icon: <Heart size={20} />, label: "Recovery" },
    { icon: <TrendingUp size={20} />, label: "Performance" },
    { icon: <Settings size={20} />, label: "Settings" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview': return <Overview user={user} />;
      case 'Workout': return <Workout />;
      case 'Recovery': return <Recovery />;
      case 'Performance': return <Performance />;
      case 'Settings': return <SettingsView user={user} />;
      default: return <Overview user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex text-white font-medium">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 flex flex-col p-6 hidden md:flex fixed h-full z-40 bg-[#0e0e0e]">
        <div className="mb-12">
          <span className="text-2xl font-black tracking-tighter text-[#adc6ff]">GYM FIT</span>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item, i) => (
            <button 
              key={i}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${
                activeTab === item.label ? "bg-[#adc6ff] text-[#002e69] font-bold" : "text-gray-500 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-4 px-4 py-3 text-gray-500 hover:text-red-400 transition-all mt-auto"
        >
          <LogOut size={20} />
          <span className="text-sm">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-72 p-6 md:p-12 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-black mb-1 uppercase tracking-tight">{activeTab === 'Overview' ? 'Performance Overview' : activeTab}</h1>
            <p className="text-gray-500 text-xs font-black uppercase tracking-[0.2em]">
              Node <span className="text-[#adc6ff]">0x4F2A</span> • Authorization <span className="text-green-400">Verified</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input 
                placeholder="Search biometrics..."
                className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 focus:border-[#adc6ff] outline-none transition-all w-full md:w-64"
              />
            </div>
            <button className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all shrink-0">
              <Bell size={20} className="text-gray-400" />
            </button>
            <div 
              onClick={() => setActiveTab('Settings')}
              className="w-12 h-12 rounded-2xl bg-[#adc6ff] text-[#002e69] flex items-center justify-center font-black shrink-0 cursor-pointer hover:scale-105 transition-all"
            >
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
