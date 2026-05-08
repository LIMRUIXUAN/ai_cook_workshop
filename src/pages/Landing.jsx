import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Shield, Smartphone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Landing = () => {
  const { currentUser: user } = useAuth();
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 md:px-12 fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <Link to="/" className="text-2xl font-black tracking-tighter text-[#adc6ff]">GYM FIT</Link>
        <div className="flex gap-6 items-center">
          {user ? (
            <Link to="/dashboard" className="bg-[#adc6ff] text-[#002e69] px-6 py-2 rounded-full font-bold hover:brightness-110 transition-all">
              Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium hover:text-[#adc6ff] transition-colors">Sign In</Link>
              <Link to="/register" className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-all text-sm">
                Join Now
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 relative flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#adc6ff]/10 text-[#adc6ff] text-xs font-bold tracking-widest uppercase border border-[#adc6ff]/20">
            Next Generation Fitness
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
            ELITE PERFORMANCE <br/>
            <span className="text-[#adc6ff]">DATA DRIVEN.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            The ultimate tracking platform for professional athletes. Monitor metrics, optimize recovery, and crush your limits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={user ? "/dashboard" : "/register"} className="flex items-center justify-center gap-3 bg-[#adc6ff] text-[#002e69] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#adc6ff]/20">
              {user ? "Go to Dashboard" : "Get Started Now"}
              <ArrowRight size={20} />
            </Link>
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all">
              Watch Demo
              <Play size={18} className="fill-current" />
            </button>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-20 relative w-full max-w-6xl mx-auto"
        >
          <div className="absolute -inset-10 bg-[#adc6ff]/20 blur-[120px] rounded-full z-0 opacity-50"></div>
          <div className="relative z-10 glass-panel rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHX1hXz0_F29fG98F8z_f36g2Wp_F6m2T5x8n4v9L3y7w8" 
              alt="Dashboard Preview" 
              className="w-full opacity-90 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <TrendingUp className="text-[#adc6ff]" />, title: "Live Analytics", desc: "Real-time performance tracking with sub-second latency." },
          { icon: <Shield className="text-[#adc6ff]" />, title: "Elite Security", desc: "Military-grade encryption for all your biometric data." },
          { icon: <Smartphone className="text-[#adc6ff]" />, title: "Global Sync", desc: "Sync effortlessly across all your high-performance devices." }
        ].map((feat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
              {feat.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{feat.title}</h3>
            <p className="text-gray-400 font-medium leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Social Proof */}
      <section className="py-20 text-center border-t border-white/5">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12">Trusted by world class athletes</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
          {/* Mock Logos */}
          <span className="text-3xl font-black">NIKE</span>
          <span className="text-3xl font-black">ADIDAS</span>
          <span className="text-3xl font-black">PUMA</span>
          <span className="text-3xl font-black">UNDER ARMOUR</span>
          <span className="text-3xl font-black">REEBOK</span>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm font-medium">
        © 2024 GYM FIT TECHNOLOGIES. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default Landing;
