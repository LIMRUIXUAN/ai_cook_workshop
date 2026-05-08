import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Droplets, Zap, ShieldCheck, Waves, Info } from 'lucide-react';

const Recovery = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-10 rounded-[40px] bg-[#131313] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Moon size={200} />
          </div>
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#adc6ff] bg-[#adc6ff]/10 px-3 py-1 rounded-full">Elite Recovery</span>
            <h2 className="text-5xl font-black mt-4 mb-8 tracking-tighter uppercase">Sleep <br/>Analysis.</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Deep Sleep", value: "2h 14m", trend: "Optimal" },
                { label: "REM Sleep", value: "1h 58m", trend: "+12%" },
                { label: "Resting HR", value: "48 bpm", trend: "Elite" },
                { label: "HRV Score", value: "94 ms", trend: "Ready" }
              ].map((m, i) => (
                <div key={i}>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">{m.label}</p>
                  <p className="text-xl font-bold">{m.value}</p>
                  <p className="text-[#adc6ff] text-[10px] font-bold mt-1">{m.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 rounded-[40px] bg-[#adc6ff] text-[#002e69] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <Droplets size={32} />
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Status</p>
              <p className="font-bold">Hydrated</p>
            </div>
          </div>
          <div>
            <h3 className="text-4xl font-black mb-2 leading-none">2.4L <br/><span className="text-sm opacity-60 font-bold uppercase tracking-widest">Hydration Level</span></h3>
            <div className="w-full h-2 bg-black/10 rounded-full mt-4 overflow-hidden">
              <div className="bg-[#002e69] h-full w-[75%]" />
            </div>
          </div>
          <button className="w-full bg-white/20 border border-white/20 py-4 rounded-2xl font-black text-sm hover:bg-white/30 transition-all mt-8">
            Log Intake
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Zap />, title: "Ready", desc: "Your CNS is fully recovered and ready for max effort.", color: "text-yellow-400" },
          { icon: <ShieldCheck />, title: "Secure", desc: "Biometric data encryption is active and verified.", color: "text-green-400" },
          { icon: <Waves />, title: "Flow", desc: "Mobility session recommended: 15min focus on hips.", color: "text-blue-400" },
          { icon: <Info />, title: "Report", desc: "Weekly recovery report is now available for review.", color: "text-white" }
        ].map((card, i) => (
          <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <div className={`mb-4 ${card.color}`}>{card.icon}</div>
            <h4 className="text-lg font-bold mb-2">{card.title}</h4>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Recovery;
