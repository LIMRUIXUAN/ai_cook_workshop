import React from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, Clock, Dumbbell, ChevronRight, Trophy } from 'lucide-react';

const Workout = () => {
  const workouts = [
    { title: "Hypertrophy A", exercises: 8, time: "75m", category: "Strength" },
    { title: "Elite Conditioning", exercises: 12, time: "45m", category: "HIIT" },
    { title: "Recovery Flow", exercises: 6, time: "30m", category: "Mobility" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter">Active Sessions</h2>
          <p className="text-gray-500 font-bold text-xs tracking-widest uppercase mt-1">Select your protocol for today</p>
        </div>
        <button className="bg-[#adc6ff] text-[#002e69] px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 hover:scale-105 transition-all">
          <Plus size={18} />
          Custom Routine
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workouts.map((w, i) => (
          <div key={i} className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#adc6ff]/5 rounded-full blur-2xl group-hover:bg-[#adc6ff]/10 transition-all" />
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#adc6ff]/10 flex items-center justify-center">
                <Dumbbell className="text-[#adc6ff]" size={24} />
              </div>
              <span className="text-[10px] font-black px-3 py-1 rounded-full bg-white/5 border border-white/10 uppercase tracking-widest">{w.category}</span>
            </div>
            <h3 className="text-2xl font-black mb-2">{w.title}</h3>
            <div className="flex gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1"><Clock size={14} /> {w.time}</span>
              <span className="flex items-center gap-1"><Dumbbell size={14} /> {w.exercises} Movements</span>
            </div>
            <button className="mt-8 w-full py-4 rounded-2xl bg-white/5 group-hover:bg-[#adc6ff] group-hover:text-[#002e69] transition-all font-black flex items-center justify-center gap-2">
              Start Session
              <Play size={16} fill="currentColor" />
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-500" size={24} />
            <h3 className="text-xl font-black uppercase">Recent PRs</h3>
          </div>
          <div className="space-y-4">
            {[
              { lift: "Deadlift", weight: "225kg", date: "2 days ago" },
              { lift: "Bench Press", weight: "140kg", date: "1 week ago" },
              { lift: "Squat", weight: "180kg", date: "Yesterday" }
            ].map((pr, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-black text-[#adc6ff]">#{i+1}</div>
                  <div>
                    <p className="font-bold">{pr.lift}</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{pr.date}</p>
                  </div>
                </div>
                <span className="text-xl font-black">{pr.weight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center">
           <div className="w-20 h-20 rounded-full border-4 border-[#adc6ff]/20 border-t-[#adc6ff] animate-spin-slow mb-6" />
           <h3 className="text-xl font-black uppercase mb-2">Volume Tracker</h3>
           <p className="text-gray-500 text-sm max-w-xs font-medium">Syncing with elite biometrics to calculate your optimal load for the next session.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Workout;
