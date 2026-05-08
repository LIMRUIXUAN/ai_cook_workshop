import React from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Smartphone, Shield, LogOut, ChevronRight } from 'lucide-react';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const SettingsView = ({ user }) => {
  const handleLogout = () => signOut(auth);

  const sections = [
    { icon: <User />, label: "Profile", sub: "Manage your biometric data and goals" },
    { icon: <Bell />, label: "Notifications", sub: "Alerts for high strain and recovery" },
    { icon: <Smartphone />, label: "Integrations", sub: "Apple Health, WHOOP, Garmin" },
    { icon: <Shield />, label: "Privacy & Security", sub: "Data encryption and sessions" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="max-w-4xl space-y-12"
    >
      <div className="flex items-center gap-8 p-10 rounded-[40px] bg-white/5 border border-white/10">
        <div className="w-24 h-24 rounded-[32px] bg-[#adc6ff] text-[#002e69] flex items-center justify-center text-4xl font-black shadow-2xl shadow-[#adc6ff]/20">
          {user?.email?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter">{user?.email?.split('@')[0]}</h2>
          <p className="text-gray-500 font-bold text-xs tracking-widest uppercase mt-1">Elite Tier Member • Joined May 2024</p>
          <div className="flex gap-4 mt-4">
             <button className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all">Edit Profile</button>
             <button className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all">Export Data</button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((s, i) => (
          <div key={i} className="group flex items-center justify-between p-8 rounded-[32px] bg-[#131313] border border-white/5 hover:border-white/10 transition-all cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-all">
                {React.cloneElement(s.icon, { size: 20, className: "text-[#adc6ff]" })}
              </div>
              <div>
                <p className="font-bold text-lg">{s.label}</p>
                <p className="text-sm text-gray-500 font-medium">{s.sub}</p>
              </div>
            </div>
            <ChevronRight className="text-gray-700 group-hover:text-white transition-all" />
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/5">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-all"
        >
          <LogOut size={18} />
          Terminate Session
        </button>
      </div>
    </motion.div>
  );
};

export default SettingsView;
