'use client';
import React, { useState } from 'react';
import { ShieldCheck, Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // We will connect this to your AWS backend in the next step!
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/dashboard'; // Temporary fake redirect
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-[#f7f9fb] font-sans text-[#191c1e]">
      
      {/* Left Side: Branding & Info (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#001e40] text-white flex-col justify-between p-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">
              <ShieldCheck size={24} className="text-[#a7c8ff]" />
            </div>
            <div>
              <div className="font-bold text-xl tracking-tight">GovDocs Sri Lanka</div>
              <div className="text-xs text-[#a7c8ff] uppercase tracking-wider">State Services Portal</div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Secure Access to Your<br/><span className="text-[#a7c8ff]">Digital Identity</span>
          </h1>
          <p className="text-[#a7c8ff] leading-relaxed max-w-md">
            The unified portal for citizens and administrators. Authenticate securely to manage documents, track applications, and verify state records.
          </p>
        </div>

        {/* Decorative Background Element */}
        <ShieldCheck size={400} className="absolute -bottom-20 -left-20 text-white opacity-5" />

        <div className="relative z-10 text-xs text-[#a7c8ff]">
          © 2024 Government of Sri Lanka. Secured by SL-CERT.
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          
          {/* Mobile Header (Only visible on small screens) */}
          <div className="flex lg:hidden items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-[#001e40] rounded flex items-center justify-center">
              <ShieldCheck size={24} className="text-[#a7c8ff]" />
            </div>
            <div>
              <div className="font-bold text-xl tracking-tight text-[#001e40]">GovDocs Sri Lanka</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#191c1e] mb-2">Sign in to your account</h2>
          <p className="text-sm text-[#737780] mb-8">Enter your registered email and password to continue.</p>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-[#43474f] uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#737780]">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-[#c3c6d1] rounded-lg focus:outline-none focus:border-[#0058be] focus:ring-1 focus:ring-[#0058be] transition-colors text-[#191c1e] text-sm"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-[#43474f] uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs font-bold text-[#0058be] hover:underline">Forgot Password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#737780]">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-[#c3c6d1] rounded-lg focus:outline-none focus:border-[#0058be] focus:ring-1 focus:ring-[#0058be] transition-colors text-[#191c1e] text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#001e40] hover:bg-[#003366] text-white py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>Sign In <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          {/* Registration Prompt */}
          <div className="mt-8 text-center text-sm text-[#43474f]">
            Don't have an account? <a href="#" className="font-bold text-[#0058be] hover:underline">Register here</a>
          </div>

        </div>
      </div>
    </div>
  );
}