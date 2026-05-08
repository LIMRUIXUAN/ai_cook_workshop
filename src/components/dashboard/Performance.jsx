import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Target, Medal, ArrowUpRight } from 'lucide-react';

const Performance = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-between h-[450px]">
          <div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">VO2 Max Trend</h3>
                <p className="text-gray-500 font-bold text-xs tracking-widest uppercase mt-1">Last 6 Months</p>
              </div>
              <div className="flex items-center gap-2 text-green-400 font-black">
                <ArrowUpRight size={20} />
                <span>+4.2%</span>
              </div>
            </div>
            
            <div className="flex-1 flex items-end gap-3 h-48">
              {[45, 52, 48, 61, 55, 68].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                  <div 
                    className="w-full bg-[#adc6ff]/10 rounded-t-xl group-hover:bg-[#adc6ff] transition-all relative"
                    style={{ height: `${val}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all text-[10px] font-black">{val} ml/kg</div>
                  </div>
                  <span className="text-[10px] font-black text-gray-600 uppercase">M{i+1}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex justify-between items-center">
            <div>
              <p className="text-4xl font-black text-[#adc6ff]">58.4</p>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Current Rating: Elite</p>
            </div>
            <button className="text-xs font-black uppercase tracking-widest bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all">Detailed Report</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-[40px] bg-[#131313] border border-white/5 h-[213px] flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-400/10 flex items-center justify-center">
                <Target className="text-orange-400" size={24} />
              </div>
              <h4 className="text-xl font-black uppercase">Quarterly Goal</h4>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Power-to-Weight Ratio Improvement</p>
              <div className="flex items-center gap-6">
                <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 w-[72%]" />
                </div>
                <span className="text-xl font-black">72%</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 h-[213px] flex flex-col justify-between group cursor-pointer hover:border-[#adc6ff]/50 transition-all">
             <div className="flex justify-between items-start">
               <div className="w-12 h-12 rounded-2xl bg-[#adc6ff]/10 flex items-center justify-center">
                 <Medal className="text-[#adc6ff]" size={24} />
               </div>
               <ArrowUpRight className="text-gray-700 group-hover:text-[#adc6ff] transition-all" size={24} />
             </div>
             <div>
               <h4 className="text-xl font-black uppercase">Elite Milestones</h4>
               <p className="text-gray-500 text-sm font-medium">You are 3 sessions away from the 'Iron Core' achievement.</p>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Performance;
