// frontend/app/login/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://13.201.122.31/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // 1. Save the JWT token and user role securely in the browser
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);

        // 2. Redirect the user based on their role
        if (data.role === 'admin') {
          router.push('/'); // Send admins to the main dashboard
        } else {
          router.push('/citizen'); // Send citizens to the document request page
        }
      } else {
        setError(data.message || 'Invalid login credentials.');
      }
    } catch (err) {
      setError('Network error. Cannot connect to the server.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 font-sans text-black">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm border border-slate-100">
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">System Login</h1>
          <p className="text-sm text-slate-500 mt-1">Sri Lanka Identity Portal</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-100 text-rose-800 text-sm font-medium rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gov.lk"
              className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-4 w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded transition disabled:bg-slate-400"
          >
            {isLoading ? 'Authenticating...' : 'Secure Login'}
          </button>
          
        </form>
      </div>
    </div>
  );
}