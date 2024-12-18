import React from 'react';
import Navbar from '../components/Navbar';
import TyceLogo from '../assets/TyceLogo.png';

const AnalyticsPage = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
        {/* Header with Logo */}
        <div className="flex items-center justify-center mb-8">
          <img src={TyceLogo} alt="Tyce Logo" className="w-20 h-20" />
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h2 className="text-gray-500 font-medium mb-2">SALES PIPELINE</h2>
            <p className="text-2xl font-bold text-black">$5M</p>
            <p className="text-green-500 text-sm">16.30%</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h2 className="text-gray-500 font-medium mb-2">PROJECT PIPELINE</h2>
            <p className="text-2xl font-bold text-black">15</p>
            <p className="text-blue-500 text-sm">7.45%</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h2 className="text-gray-500 font-medium mb-2">REVENUE FORECAST</h2>
            <p className="text-2xl font-bold text-black">$4M</p>
            <p className="text-blue-500 text-sm">21.30%</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h2 className="text-gray-500 font-medium mb-2">REVENUE DELIVERED</h2>
            <p className="text-2xl font-bold text-black">$200K</p>
            <p className="text-blue-500 text-sm">20.60%</p>
          </div>
        </div>

        {/* Revenue Forecast Chart */}
        <div className="bg-white p-6 rounded-md shadow-md mb-8">
          <h2 className="text-gray-700 font-medium mb-4">REVENUE FORECAST</h2>
          <img
            src="https://www.chartjs.org/media/logo.svg" // Replace with your custom SVG graph URL
            alt="Revenue Forecast Chart"
            className="w-full h-64 object-contain"
          />
        </div>

        {/* Top Clients and Top Project Offerings */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-gray-700 font-medium mb-4">TOP CLIENTS</h2>
            <ul>
              <li className="mb-2">ATCO - 10 Projects - $3M</li>
              <li className="mb-2">DTE Energy - 1 Project - $20K</li>
              <li className="mb-2">Georgia Power - 5 Projects - $50K</li>
              <li>Florida Power - 5 Projects - $1M</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-gray-700 font-medium mb-4">TOP PROJECT OFFERINGS</h2>
            <ul>
              <li className="mb-2">Energy Efficiency - 10 Projects - $3M</li>
              <li className="mb-2">Customer Engagement - 1 Project - $60K</li>
              <li className="mb-2">Rates Engineering - 5 Projects - $50K</li>
              <li>Demand Management - 5 Projects - $1M</li>
            </ul>
          </div>
        </div>

        {/* Project Pipeline */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-gray-700 font-medium mb-4">PROJECT PIPELINE</h2>
          <ul>
            <li className="flex justify-between mb-2">
              <span>SaskPower RFP</span>
              <span className="text-green-500">$150K</span>
              <button className="bg-green-500 text-white px-4 py-1 rounded">APPROVE</button>
            </li>
            <li className="flex justify-between mb-2">
              <span>ATCO Demand Forecast</span>
              <span className="text-black">$200K</span>
              <button className="bg-gray-300 text-black px-4 py-1 rounded">APPROVE</button>
            </li>
            <li className="flex justify-between mb-2">
              <span>GP Demand Management</span>
              <span className="text-gray-500">$500K</span>
              <button className="bg-gray-200 px-4 py-1 rounded">DRAFT</button>
            </li>
            <li className="flex justify-between">
              <span>Toronto Hydro Rates</span>
              <span className="text-gray-500">$50M</span>
              <button className="bg-gray-300 px-4 py-1 rounded">TO DO</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
