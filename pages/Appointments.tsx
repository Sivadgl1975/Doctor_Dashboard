import React from 'react';
import { Calendar as CalendarIcon, Clock, Plus, MoreVertical, Video, MapPin } from 'lucide-react';

const Appointments: React.FC = () => {
  const times = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
  
  const appointments = [
    { id: 1, name: 'Sarah Johnson', time: '09:00 AM', type: 'General Checkup', status: 'confirmed', method: 'In-person' },
    { id: 2, name: 'Michael Chen', time: '10:00 AM', type: 'Follow-up', status: 'pending', method: 'Video Call' },
    { id: 3, name: 'Emma Wilson', time: '02:00 PM', type: 'Lab Review', status: 'confirmed', method: 'In-person' },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-140px)] gap-6">
      {/* Calendar Section (Mock UI) */}
      <div className="lg:w-2/3 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
            October 2023
          </h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">Day</button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Week</button>
            <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">Month</button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
            {/* Simple Calendar Grid Mock */}
            <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-500">{day}</div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                    <div key={i} className={`bg-white min-h-[80px] p-2 hover:bg-blue-50 cursor-pointer ${i === 14 ? 'bg-blue-50' : ''}`}>
                        <span className={`text-sm ${i === 14 ? 'font-bold text-blue-600' : 'text-gray-700'}`}>{i + 1}</span>
                        {i === 14 && <div className="mt-1 text-xs bg-blue-100 text-blue-700 px-1 rounded truncate">3 Appts</div>}
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Day Schedule Sidebar */}
      <div className="lg:w-1/3 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div>
                <h3 className="font-semibold text-gray-800">Wednesday, Oct 15</h3>
                <p className="text-xs text-gray-500">3 Appointments</p>
            </div>
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-sm">
                <Plus className="w-5 h-5" />
            </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {times.map(time => {
                const appt = appointments.find(a => a.time === time);
                return (
                    <div key={time} className="flex gap-4 group">
                        <div className="w-16 pt-1 text-xs font-medium text-gray-500">{time}</div>
                        <div className="flex-1 relative">
                             {/* Timeline line */}
                            <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 -ml-2 group-last:hidden"></div>
                            
                            {appt ? (
                                <div className={`p-3 rounded-lg border-l-4 shadow-sm ${
                                    appt.status === 'confirmed' ? 'bg-blue-50 border-blue-500' : 'bg-orange-50 border-orange-500'
                                }`}>
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-sm font-semibold text-gray-900">{appt.name}</h4>
                                        <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-4 h-4" /></button>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-0.5">{appt.type}</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500 gap-3">
                                        <span className="flex items-center">
                                            <Clock className="w-3 h-3 mr-1" /> 30 min
                                        </span>
                                        <span className="flex items-center">
                                            {appt.method === 'Video Call' ? <Video className="w-3 h-3 mr-1" /> : <MapPin className="w-3 h-3 mr-1" />}
                                            {appt.method}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-12 border border-dashed border-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 hover:bg-gray-50 cursor-pointer">
                                    No appointments
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Appointments;