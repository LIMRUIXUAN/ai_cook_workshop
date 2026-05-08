import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Flame, 
  Activity, 
  Zap,
  TrendingUp
} from 'lucide-react';

const Overview = ({ user }) => {
  const stats = [
    { label: "Heart Rate", value: "72", unit: "BPM", icon: <Heart className="text-red-400" />, trend: "+2.4%" },
    { label: "Active Calories", value: "1,240", unit: "KCAL", icon: <Flame className="text-orange-400" />, trend: "+12%" },
    { label: "Training Time", value: "84", unit: "MIN", icon: <Activity className="text-blue-400" />, trend: "-3.1%" },
    { label: "Sleep Score", value: "92", unit: "PTS", icon: <Zap className="text-yellow-400" />, trend: "+0.5%" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
             <svg viewBox="0 0 400 150" className="w-full h-full p-8 opacity-50">
               <path d="M0,120 Q50,110 80,80 T150,90 T220,40 T300,60 T400,20" fill="none" stroke="#adc6ff" strokeWidth="4" className="animate-pulse" />
               <path d="M0,130 Q50,125 80,100 T150,110 T220,70 T300,90 T400,50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
             </svg>
          </div>
        </div>

        <div className="p-8 rounded-[32px] bg-[#adc6ff] text-[#002e69] flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-black uppercase mb-4">Daily Goal</h4>
            <p className="text-4xl font-black mb-6 leading-none">85% <br/><span className="text-sm opacity-60">Completed</span></p>
            <div className="w-full bg-black/10 h-3 rounded-full overflow-hidden">
              <div className="bg-[#002e69] h-full w-[85%]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
