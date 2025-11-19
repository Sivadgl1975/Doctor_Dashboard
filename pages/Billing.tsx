import React from 'react';
import { Printer, Save, Plus } from 'lucide-react';

const Billing: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">New Invoice #INV-2023-001</h2>
            <div className="flex gap-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm">
                    <Save className="w-4 h-4 mr-2" /> Save Draft
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm">
                    <Printer className="w-4 h-4 mr-2" /> Generate & Print
                </button>
            </div>
        </div>

        <div className="p-8 grid grid-cols-2 gap-12">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bill To</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg mb-2" placeholder="Patient Name" defaultValue="John Doe" />
                <textarea className="w-full p-2 border border-gray-300 rounded-lg text-sm" rows={3} placeholder="Address" defaultValue="123 Main St, Springfield"></textarea>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between">
                    <span className="text-gray-600">Invoice Date:</span>
                    <span className="font-medium">Oct 26, 2023</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-medium">Oct 26, 2023</span>
                </div>
            </div>
        </div>

        <div className="px-8">
            <table className="w-full mb-8">
                <thead>
                    <tr className="border-b-2 border-gray-100 text-left text-sm font-semibold text-gray-600">
                        <th className="py-3">Item Description</th>
                        <th className="py-3 w-24 text-center">Qty</th>
                        <th className="py-3 w-32 text-right">Rate</th>
                        <th className="py-3 w-32 text-right">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-50">
                        <td className="py-4">General Consultation</td>
                        <td className="text-center">1</td>
                        <td className="text-right">$50.00</td>
                        <td className="text-right font-medium">$50.00</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                        <td className="py-4">Blood Test (CBC)</td>
                        <td className="text-center">1</td>
                        <td className="text-right">$30.00</td>
                        <td className="text-right font-medium">$30.00</td>
                    </tr>
                </tbody>
            </table>
            
            <button className="text-blue-600 font-medium text-sm flex items-center hover:underline mb-8">
                <Plus className="w-4 h-4 mr-1" /> Add Item
            </button>

            <div className="flex justify-end mb-8">
                <div className="w-64 space-y-3">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>$80.00</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Tax (10%)</span>
                        <span>$8.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-3">
                        <span>Total</span>
                        <span>$88.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Billing;