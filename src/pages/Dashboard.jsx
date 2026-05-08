import React from 'react';
import { motion } from 'framer-motion';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { 
  LayoutDashboard, 
  Activity, 
  Heart, 
  Flame, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  ChevronRight,
  TrendingUp,
  Clock,
  Zap
} from 'lucide-react';

const Dashboard = ({ user }) => {
  const handleLogout = () => signOut(auth);

  const stats = [
    { label: "Heart Rate", value: "72", unit: "BPM", icon: <Heart className="text-red-400" />, trend: "+2.4%" },
    { label: "Active Calories", value: "1,240", unit: "KCAL", icon: <Flame className="text-orange-400" />, trend: "+12%" },
    { label: "Training Time", value: "84", unit: "MIN", icon: <Activity className="text-blue-400" />, trend: "-3.1%" },
    { label: "Sleep Score", value: "92", unit: "PTS", icon: <Zap className="text-yellow-400" />, trend: "+0.5%" }
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex text-white font-medium">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 flex flex-col p-6 hidden md:flex">
        <div className="mb-12">
          <span className="text-2xl font-black tracking-tighter text-[#adc6ff]">GYM FIT</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { icon: <LayoutDashboard size={20} />, label: "Overview", active: true },
            { icon: <Activity size={20} />, label: "Workout" },
            { icon: <Heart size={20} />, label: "Recovery" },
            { icon: <TrendingUp size={20} />, label: "Performance" },
            { icon: <Settings size={20} />, label: "Settings" }
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${
                item.active ? "bg-[#adc6ff] text-[#002e69] font-bold" : "text-gray-500 hover:text-white hover:bg-white/5"
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
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black mb-1 uppercase tracking-tight">Performance Overview</h1>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
              Welcome back, <span className="text-[#adc6ff]">{user?.email?.split('@')[0]}</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input 
                placeholder="Search analytics..."
                className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 focus:border-[#adc6ff] outline-none transition-all w-64"
              />
            </div>
            <button className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all">
              <Bell size={20} className="text-gray-400" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-[#adc6ff] text-[#002e69] flex items-center justify-center font-black">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 group-hover:scale-125 transition-all">
                {stat.icon}
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black">{stat.value}</span>
                <span className="text-sm font-bold text-gray-600">{stat.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart Card */}
          <div className="lg:col-span-2 p-8 rounded-[40px] bg-white/5 border border-white/10 h-96 relative flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black uppercase tracking-tight">Activity Progress</h3>
              <div className="flex gap-2">
                {['Day', 'Week', 'Month'].map((t, i) => (
                  <button key={i} className={`px-4 py-2 rounded-xl text-xs font-bold ${i === 1 ? 'bg-white text-black' : 'text-gray-500 hover:text-white transition-all'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full bg-white/5 rounded-3xl border border-dashed border-white/10 flex items-center justify-center overflow-hidden">
               {/* Mock Chart SVG */}
               <svg viewBox="0 0 400 150" className="w-full h-full p-8 opacity-50">
                 <path d="M0,120 Q50,110 80,80 T150,90 T220,40 T300,60 T400,20" fill="none" stroke="#adc6ff" strokeWidth="4" className="animate-pulse" />
                 <path d="M0,130 Q50,125 80,100 T150,110 T220,70 T300,90 T400,50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
               </svg>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-[32px] bg-[#adc6ff] text-[#002e69] flex-1">
              <h4 className="text-lg font-black uppercase mb-4">Daily Goal</h4>
              <p className="text-4xl font-black mb-6 leading-none">85% <br/><span className="text-sm opacity-60">Completed</span></p>
              <div className="w-full bg-black/10 h-3 rounded-full overflow-hidden">
                <div className="bg-[#002e69] h-full w-[85%]" />
              </div>
            </div>
            
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-4">Up Next</h4>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Clock size={20} className="text-[#adc6ff]" />
                  </div>
                  <div>
                    <p className="font-bold">Strength Training</p>
                    <p className="text-xs text-gray-500">Starts in 15 mins</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-white/5 border border-white/10 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Join Session
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
