import React from 'react';
import { Clock } from 'lucide-react';

const QueueBoard: React.FC = () => {
  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col overflow-hidden">
      <header className="bg-slate-800 p-6 flex justify-between items-center border-b border-slate-700">
        <h1 className="text-3xl font-bold text-blue-400">MediPulse Clinic Queue</h1>
        <div className="flex items-center gap-2 text-xl font-mono bg-slate-900 px-4 py-2 rounded-lg">
          <Clock className="w-6 h-6" />
          <span>10:42 AM</span>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Left: Now Serving */}
        <div className="w-2/3 p-12 flex flex-col items-center justify-center border-r border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-4xl font-medium text-slate-400 mb-8 uppercase tracking-widest">Now Serving</h2>
            <div className="bg-blue-600 text-white text-[12rem] font-bold leading-none px-16 py-8 rounded-3xl shadow-[0_0_60px_rgba(37,99,235,0.5)]">
                A-104
            </div>
            <div className="mt-12 text-center">
                <h3 className="text-3xl font-semibold text-white">Room No. 3</h3>
                <p className="text-xl text-blue-300 mt-2">Dr. Jane Doe</p>
            </div>
        </div>

        {/* Right: Upcoming */}
        <div className="w-1/3 bg-slate-800 flex flex-col">
            <div className="p-6 bg-slate-700 border-b border-slate-600">
                <h2 className="text-2xl font-bold">Up Next</h2>
            </div>
            <div className="flex-1 overflow-hidden">
                {[
                    { token: 'A-105', status: 'Waiting' },
                    { token: 'A-106', status: 'Waiting' },
                    { token: 'B-012', status: 'Waiting' },
                    { token: 'A-107', status: 'Waiting' },
                    { token: 'C-004', status: 'Waiting' },
                ].map((item, i) => (
                    <div key={i} className="p-6 border-b border-slate-700 flex justify-between items-center hover:bg-slate-750 transition-colors">
                        <span className="text-4xl font-bold text-white">{item.token}</span>
                        <span className="text-lg text-yellow-400 font-medium px-3 py-1 bg-yellow-400/10 rounded-full">
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>
            <div className="p-6 bg-slate-900 mt-auto border-t border-slate-700">
                <p className="text-center text-slate-400 animate-pulse">Please have your documents ready.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default QueueBoard;