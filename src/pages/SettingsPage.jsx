import React from 'react';
import Navbar from '../components/Navbar';
import TyceLogo from '../assets/TyceLogo.png';
import defaultPic from '../assets/Profile.png';
import myPic from '../assets/chico.png';

const SettingsPage = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
        {/* Header with Logo */}
        <div className="flex items-center justify-center mb-8">
          <img src={TyceLogo} alt="Tyce Logo" className="w-20 h-20" />
        </div>

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-md shadow-md mb-8">
          <h2 className="text-gray-700 text-xl font-semibold mb-4">Profile Information</h2>
          <div className="flex items-center mb-4">
            <img
              src={myPic} // Replace with user profile image URL
              alt="User Profile"
              className="w-24 h-24 rounded-full mr-6"
            />
            <div className="flex-1">
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                placeholder="Chico Lachowski"
                className="w-full bg-white text-black border rounded-md p-2"
              />
              <label className="block text-gray-600 mt-4 mb-1">Email</label>
              <input
                type="email"
                placeholder="youremail@example.com"
                className="w-full bg-white text-black border rounded-md p-2"
              />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white p-6 rounded-md shadow-md mb-8">
          <h2 className="text-gray-700 text-xl font-semibold mb-4">Account Settings</h2>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-white text-black border rounded-md p-2"
            />
            <label className="block text-gray-600 mt-4 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (123) 456-7890"
              className="w-full bg-white text-black border rounded-md p-2"
            />
          </div>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">Save Changes</button>
        </div>

        {/* Subscription Settings */}
        <div className="bg-white p-6 rounded-md shadow-md mb-8">
          <h2 className="text-gray-700 text-xl font-semibold mb-4">Subscription</h2>
          <p className="text-gray-600 mb-2">Plan: <span className="font-semibold">Premium</span></p>
          <p className="text-gray-600 mb-4">Billing Date: <span className="font-semibold">15 Jan, 2025</span></p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Upgrade Plan</button>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-md shadow-md mb-8">
          <h2 className="text-gray-700 text-xl font-semibold mb-4">Notifications</h2>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Email Notifications</p>
            <input type="checkbox" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">Push Notifications</p>
            <input type="checkbox" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">Weekly Reports</p>
            <input type="checkbox" className="w-6 h-6" />
          </div>
        </div>

        {/* Privacy and Security */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-gray-700 text-xl font-semibold mb-4">Privacy & Security</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Two-Factor Authentication</p>
              <button className="bg-black text-white px-4 py-2 rounded-md">Enable</button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Delete Account</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

