import React, { useState } from 'react';
import { authService } from '../../api/authService';
import { ShieldAlert, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function ReceptionLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await authService.login({ email, password });
      const user = res.data?.user;

      if (user && (user.role === 'RECEPTIONIST' || user.role === 'ADMIN' || user.role === 'SUPER_ADMIN')) {
        // Successful login
        window.history.pushState({}, '', '/reception/dashboard');
        window.dispatchEvent(new PopStateEvent('popstate'));
      } else {
        // Clear auth since role is not receptionist or admin
        authService.logout();
        setError('Access denied. Dedicated receptionist or administrator role required.');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        {/* Brand Header */}
        <div className="w-16 h-16 rounded-2xl bg-white p-1.5 mx-auto mb-4 flex items-center justify-center border-2 border-[rgba(0,194,184,0.4)] shadow-[0_4px_20px_rgba(0,45,98,0.35),0_0_20px_rgba(0,194,184,0.4)]">
          <img src="/logo.png" alt="Andaman Trails Logo" className="w-full h-full object-contain rounded-xl" />
        </div>
        <h2 className="text-2xl font-extrabold  text-[#0B2545]  tracking-tight">
          ANDAMAN <span className="text-[#FF6B4A]">TRAILS</span>
        </h2>
        <p className="mt-1 text-xs font-bold text-[#FF6B4A] uppercase tracking-widest">
          Reception & Front-Desk Login
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#ffffff] border border-[#e2e8f0] py-8 px-6 shadow-2xl rounded-3xl backdrop-blur-xl sm:px-10">
          
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="receptionist@andaman-trails.com"
                  className="w-full bg-[#f8fafc]/80 border border-[#e2e8f0] rounded-xl py-3 px-4 text-sm  text-slate-800  placeholder-slate-500 focus:outline-none focus:border-[#F06543] transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#f8fafc]/80 border border-[#e2e8f0] rounded-xl py-3 px-4 pr-11 text-sm  text-slate-800  placeholder-slate-500 focus:outline-none focus:border-[#F06543] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover: text-slate-800 "
                >
                  {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-700 bg-white text-[#F06543] focus:ring-0"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-slate-500">
                  Remember this device
                </label>
              </div>
              <div className="text-xs">
                <a href="#forgot" className="font-bold text-[#F06543] hover:text-[#F06543] transition-colors">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-black text-sm uppercase py-3.5 px-4 rounded-xl shadow-[0_0_20px_rgba(33,230,193,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
              >
                {loading ? 'Authenticating Portal...' : 'LOGIN TO FRONT DESK'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
