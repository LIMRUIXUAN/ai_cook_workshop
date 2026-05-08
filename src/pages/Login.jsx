import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex overflow-hidden">
      {/* Left Column: Branding (Bento Style) */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#131313] relative flex-col justify-between p-16 border-r border-white/5">
        <Link to="/" className="text-2xl font-black tracking-tighter text-[#adc6ff] z-10">GYM FIT</Link>
        <div className="z-10">
          <h2 className="text-5xl font-black mb-6 leading-none">WELCOME <br/>BACK.</h2>
          <p className="text-gray-400 text-lg font-medium max-w-xs">Access your elite performance metrics and continue your transformation.</p>
        </div>
        <div className="absolute inset-0 opacity-20 grayscale pointer-events-none">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHX1hXz0_F29fG98F8z_f36g2Wp_F6m2T5x8n4v9L3y7w8" 
            alt="Gym" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="glass-panel p-6 rounded-3xl border border-white/10 z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#adc6ff]/10 flex items-center justify-center">
              <Lock className="text-[#adc6ff]" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#adc6ff]">Security Protocol</p>
              <p className="text-sm font-bold">Encrypted Session Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 relative">
        <Link to="/" className="absolute top-8 left-8 lg:hidden text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <ArrowLeft size={20} />
          Back
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-[440px]"
        >
          <div className="mb-12">
            <h1 className="text-4xl font-black tracking-tight mb-2 uppercase">Sign In</h1>
            <p className="text-gray-400 font-medium">Enter your credentials to enter the vault.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@performance.io"
                  className="w-full bg-white/5 border-b border-white/10 px-14 py-4 rounded-2xl focus:border-[#adc6ff] transition-all outline-none font-medium placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-white/5 border-b border-white/10 px-14 py-4 rounded-2xl focus:border-[#adc6ff] transition-all outline-none font-medium placeholder:text-gray-600"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-xs font-bold bg-red-400/10 p-3 rounded-xl border border-red-400/20">
                {error}
              </p>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#adc6ff] text-[#002e69] py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#adc6ff]/10 disabled:opacity-50"
            >
              {loading ? "AUTHENTICATING..." : "SIGN IN"}
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>

          <p className="mt-10 text-center text-gray-500 font-medium">
            New to the elite? <Link to="/register" className="text-[#adc6ff] font-bold hover:underline">Create Account</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
