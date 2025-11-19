import React from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import QueueBoard from './pages/QueueBoard';
import Dashboard from './pages/Dashboard';
import LabResults from './pages/LabResults';
import Appointments from './pages/Appointments';
import IPDManagement from './pages/IPDManagement';
import MedicalHistory from './pages/MedicalHistory';
import WhatsAppComms from './pages/WhatsAppComms';
import Billing from './pages/Billing';
import Settings from './pages/Settings';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Screens that don't use the sidebar layout
  const standaloneScreens = ['/login', '/queue'];
  const isStandalone = standaloneScreens.includes(location.pathname);

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-gray-800">
            {location.pathname === '/' ? 'Dashboard' : location.pathname.substring(1).replace('-', ' ').toUpperCase()}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
              DR
            </div>
            <span className="text-sm font-medium text-gray-700">Dr. Jane Doe</span>
          </div>
        </header>
        <main className="w-full grow p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/queue" element={<QueueBoard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/lab-results" element={<LabResults />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/ipd" element={<IPDManagement />} />
          <Route path="/history" element={<MedicalHistory />} />
          <Route path="/communication" element={<WhatsAppComms />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
};

export default App;