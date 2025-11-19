import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { User, Activity, Pill, MoreHorizontal } from 'lucide-react';

const IPDManagement: React.FC = () => {
  const [wards, setWards] = useState<any[]>([]);

  useEffect(() => {
    api.ipd.getWards().then(setWards);
  }, []);

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Occupied</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                <span className="text-sm text-gray-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Critical</span>
            </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
            + Admit Patient
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {wards.map((bed, idx) => (
            <div 
                key={idx} 
                className={`relative p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
                    bed.isOccupied 
                        ? bed.condition === 'Critical' 
                            ? 'bg-red-50 border-red-200 hover:border-red-300' 
                            : 'bg-white border-green-200 hover:border-green-300' 
                        : 'bg-gray-50 border-dashed border-gray-300'
                }`}
            >
                <div className="flex justify-between items-start mb-3">
                    <span className={`text-lg font-bold ${bed.isOccupied ? 'text-gray-800' : 'text-gray-400'}`}>
                        {bed.bedNumber}
                    </span>
                    {bed.isOccupied && (
                        <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {bed.isOccupied ? (
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                {bed.patientName?.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">{bed.patientName}</p>
                                <p className={`text-xs font-medium ${bed.condition === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>
                                    {bed.condition}
                                </p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 pt-2">
                            <button className="flex items-center justify-center gap-1 py-1.5 px-2 bg-white border border-gray-200 rounded text-xs font-medium hover:bg-gray-50">
                                <Activity className="w-3 h-3 text-blue-500" /> Vitals
                            </button>
                            <button className="flex items-center justify-center gap-1 py-1.5 px-2 bg-white border border-gray-200 rounded text-xs font-medium hover:bg-gray-50">
                                <Pill className="w-3 h-3 text-purple-500" /> Meds
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="h-20 flex items-center justify-center text-gray-400 text-sm">
                        Available
                    </div>
                )}
            </div>
        ))}
      </div>
    </div>
  );
};

export default IPDManagement;