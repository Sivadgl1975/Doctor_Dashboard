import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('clinic');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[600px]">
        <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex gap-6">
                {['Clinic Profile', 'User Management', 'Notifications', 'Templates'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
                        className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                            activeTab === tab.toLowerCase().split(' ')[0]
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        <div className="p-8 max-w-2xl">
            {activeTab === 'clinic' && (
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Clinic Name</label>
                        <input type="text" defaultValue="MediPulse Pro Clinic" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <textarea rows={3} defaultValue="123 Healthcare Blvd, Medical District" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                            <input type="email" defaultValue="admin@medipulse.com" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="tel" defaultValue="+1 234 567 8900" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                    </div>
                    <div className="pt-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">Save Changes</button>
                    </div>
                </form>
            )}
            {activeTab !== 'clinic' && (
                <div className="text-center py-12 text-gray-500">
                    Settings for {activeTab} are currently locked in this demo.
                </div>
            )}
        </div>
    </div>
  );
};

export default Settings;