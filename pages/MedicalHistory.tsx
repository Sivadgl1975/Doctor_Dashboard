import React from 'react';
import { FileText, Syringe, Stethoscope, AlertTriangle, Paperclip } from 'lucide-react';

const MedicalHistory: React.FC = () => {
  const events = [
    { id: 1, date: 'Oct 24, 2023', type: 'Consultation', title: 'General Checkup', doctor: 'Dr. Jane Doe', icon: Stethoscope, color: 'blue' },
    { id: 2, date: 'Oct 20, 2023', type: 'Lab Result', title: 'Blood Work Completed', doctor: 'Lab Dept', icon: FileText, color: 'green', attachment: 'Report.pdf' },
    { id: 3, date: 'Sep 15, 2023', type: 'Vaccination', title: 'Flu Shot', doctor: 'Nurse Sarah', icon: Syringe, color: 'purple' },
    { id: 4, date: 'Aug 01, 2023', type: 'Allergy', title: 'Reported Penicillin Allergy', doctor: 'Dr. Smith', icon: AlertTriangle, color: 'red' },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
         <h2 className="text-lg font-bold text-gray-800">Patient Timeline: John Doe</h2>
         <button className="text-sm text-blue-600 font-medium hover:underline">+ Add Record</button>
      </div>

      <div className="relative border-l-2 border-gray-200 ml-3 space-y-8">
        {events.map((event) => {
            const Icon = event.icon;
            const colors: any = {
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200',
                red: 'bg-red-100 text-red-600 border-red-200',
            };
            
            return (
                <div key={event.id} className="relative pl-8">
                    {/* Dot */}
                    <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white ${
                        event.color === 'blue' ? 'bg-blue-500' : 
                        event.color === 'green' ? 'bg-green-500' : 
                        event.color === 'purple' ? 'bg-purple-500' : 'bg-red-500'
                    }`}></div>
                    
                    {/* Card */}
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${colors[event.color]}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{event.title}</h4>
                                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">{event.type}</span>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500 font-medium">{event.date}</span>
                        </div>
                        
                        <p className="text-sm text-gray-600 mt-2 ml-12">
                            Performed by: <span className="font-medium text-gray-800">{event.doctor}</span>
                        </p>

                        {event.attachment && (
                            <div className="ml-12 mt-3 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 cursor-pointer w-fit">
                                <Paperclip className="w-4 h-4" />
                                {event.attachment}
                            </div>
                        )}
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default MedicalHistory;