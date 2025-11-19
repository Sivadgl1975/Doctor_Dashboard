import React from 'react';
import { Send, Paperclip, Phone, Video, MoreVertical } from 'lucide-react';

const WhatsAppComms: React.FC = () => {
  const chats = [
    { id: 1, name: 'Alice Brown', msg: 'Can I reschedule?', time: '10:00 AM', unread: 2 },
    { id: 2, name: 'Robert Wilson', msg: 'Thanks doctor!', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Emma Davis', msg: 'Report received.', time: 'Yesterday', unread: 0 },
  ];

  const templates = [
    'Appointment Reminder',
    'Lab Report Ready',
    'Payment Invoice',
    'Follow-up Request'
  ];

  return (
    <div className="flex h-[calc(100vh-140px)] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-bold text-gray-700">Messages</h3>
            </div>
            <div className="flex-1 overflow-y-auto">
                {chats.map(chat => (
                    <div key={chat.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${chat.id === 1 ? 'bg-blue-50' : ''}`}>
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-semibold text-sm text-gray-900">{chat.name}</h4>
                            <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600 truncate w-40">{chat.msg}</p>
                            {chat.unread > 0 && (
                                <span className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{chat.unread}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="h-16 border-b border-gray-200 flex justify-between items-center px-6 bg-gray-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold">AB</div>
                    <div>
                        <h3 className="font-semibold text-gray-900">Alice Brown</h3>
                        <p className="text-xs text-green-600 flex items-center gap-1">● Online</p>
                    </div>
                </div>
                <div className="flex gap-4 text-gray-500">
                    <Phone className="w-5 h-5 cursor-pointer hover:text-gray-700" />
                    <Video className="w-5 h-5 cursor-pointer hover:text-gray-700" />
                    <MoreVertical className="w-5 h-5 cursor-pointer hover:text-gray-700" />
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 bg-[#e5ded8] p-6 overflow-y-auto space-y-4">
                <div className="flex justify-center">
                    <span className="bg-white/80 px-3 py-1 rounded-lg text-xs text-gray-600 shadow-sm">Today</span>
                </div>
                <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-md">
                        <p className="text-sm text-gray-800">Hello Alice, your appointment is confirmed for tomorrow at 9 AM.</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">09:30 AM</span>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-md">
                        <p className="text-sm text-gray-800">Great, thank you doctor! Can I reschedule to 10 AM?</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:00 AM</span>
                    </div>
                </div>
            </div>

            {/* Template Bar */}
            <div className="h-12 bg-gray-50 border-t border-gray-200 flex items-center px-4 gap-2 overflow-x-auto">
                {templates.map(t => (
                    <button key={t} className="flex-shrink-0 px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-colors">
                        {t}
                    </button>
                ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-100 flex items-center gap-3">
                <button className="text-gray-500 hover:text-gray-700"><Paperclip className="w-5 h-5" /></button>
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="flex-1 py-2 px-4 rounded-full border-none focus:ring-0 shadow-sm"
                />
                <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 shadow-sm">
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
    </div>
  );
};

export default WhatsAppComms;