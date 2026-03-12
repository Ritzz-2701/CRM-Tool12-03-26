import React from 'react';
import Layout from '../../components/Layout';

export default function CreateAccount() {
  return (
    <Layout>
      <div className="space-y-6">
      {/* NAME Section */}
      <div>
        <label className="block text-sm font-bold mb-3">NAME</label>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">First Name</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">*Last Name</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
 
      {/* First Row - Office Phone and Mobile */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold mb-2">OFFICE PHONE</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            placeholder=""
          />
        </div>
 
        <div>
          <label className="block text-sm font-bold mb-2">MOBILE</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            placeholder=""
          />
        </div>
      </div>
 
      {/* Job Title and Department */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold mb-2">JOB TITLE</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            placeholder=""
          />
        </div>
 
        <div>
          <label className="block text-sm font-bold mb-2">DEPARTMENT</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            placeholder=""
          />
        </div>
      </div>
 
      {/* Assigned To and Account Name */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold mb-2">ACCOUNT NAME</label>
          <div className="relative">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              placeholder="Select an item"
            />
            <button className="absolute right-2 top-2.5 text-gray-500">✕</button>
            <button className="absolute right-8 top-2.5 text-gray-500">▼</button>
          </div>
        </div>
 
        <div>
          <label className="block text-sm font-bold mb-2">ASSIGNED TO</label>
          <div className="relative">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              placeholder="WillWestin"
              defaultValue="WillWestin"
            />
            <button className="absolute right-2 top-2.5 text-gray-500">✕</button>
            <button className="absolute right-8 top-2.5 text-gray-500">▼</button>
          </div>
        </div>
      </div>
 
      {/* Email Address Section */}
      <div>
        <label className="block text-sm font-bold mb-3">EMAIL ADDRESS</label>
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-4 items-start">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Email Address</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col items-center pt-6">
              <label className="text-xs text-gray-600 mb-2">Primary</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex flex-col items-center pt-6">
              <label className="text-xs text-gray-600 mb-2">Opt Out</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex flex-col items-center pt-6">
              <label className="text-xs text-gray-600 mb-2">Invalid</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="text-blue-500 text-2xl">+</button>
          </div>
        </div>
      </div>
 
      {/* Addresses Section */}
      <div className="grid grid-cols-2 gap-8">
        {/* Primary Address */}
        <div>
          <label className="block text-sm font-bold mb-3">PRIMARY ADDRESS</label>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold mb-1">Primary Address Street</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                rows="4"
                placeholder=""
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Primary Address Postal Code</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Primary Address City</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
 
        {/* Other Address */}
        <div>
          <label className="block text-sm font-bold mb-3">OTHER ADDRESS</label>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold mb-1">Alternate Address Street</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                rows="4"
                placeholder=""
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Alternate Address Postal Code</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Alternate Address City</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
 
 