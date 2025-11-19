import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="p-8 pb-0 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Stethoscope className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1">Sign in to MediPulse Pro</p>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="doctor@medipulse.com"
                    defaultValue="admin@medipulse.com"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                    type="password" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="••••••••"
                    defaultValue="password"
                />
            </div>
            
            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
                    Remember me
                </label>
                <a href="#" className="text-blue-600 hover:underline font-medium">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-transform active:scale-95 shadow-lg shadow-blue-500/30">
                Sign In
            </button>
        </form>
        
        <div className="bg-gray-50 p-4 text-center text-sm text-gray-600 border-t border-gray-100">
            Don't have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Contact Admin</a>
        </div>
      </div>
    </div>
  );
};

export default Login;