import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FlaskConical, 
  Calendar, 
  BedDouble, 
  History, 
  MessageCircle, 
  Receipt, 
  Settings,
  LogOut,
  MonitorPlay
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Analytics', icon: LayoutDashboard },
    { to: '/appointments', label: 'Appointments', icon: Calendar },
    { to: '/lab-results', label: 'Lab Results', icon: FlaskConical },
    { to: '/ipd', label: 'IPD Management', icon: BedDouble },
    { to: '/history', label: 'Medical History', icon: History },
    { to: '/communication', label: 'WhatsApp', icon: MessageCircle },
    { to: '/billing', label: 'Billing', icon: Receipt },
    { to: '/settings', label: 'Settings', icon: Settings },
    { to: '/queue', label: 'Queue Board', icon: MonitorPlay },
  ];

  return (
    <div className="flex flex-col w-64 bg-slate-900 text-white h-full shadow-xl">
      <div className="flex items-center justify-center h-16 border-b border-slate-700">
        <h1 className="text-2xl font-bold tracking-wider text-blue-400">MediPulse</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-700">
        <Link to="/login" className="flex items-center w-full px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800">
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;