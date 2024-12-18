import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TyceLogo from '../assets/TyceLogo.png';

const DocumentPage = () => {
  const [selectedFileContent, setSelectedFileContent] = useState(null);

  // Hardcoded example files
  const files = [
    { id: 1, name: 'Sales Report Q1', date: '2024-03-01', type: 'Spreadsheet', content: 'Sales: $500K\nExpenses: $250K\nProfit: $250K' },
    { id: 2, name: 'Revenue Forecast', date: '2024-04-15', type: 'Spreadsheet', content: 'Projected Revenue: $1M\nActual: $950K' },
    { id: 3, name: 'Client Summary', date: '2024-05-12', type: 'Google Doc', content: 'Client: ATCO\nProjects: 10\nStatus: Approved' },
    { id: 4, name: 'Project Timeline', date: '2024-06-01', type: 'Spreadsheet', content: 'Jan: Planning\nFeb: Development\nMar: Testing' },
  ];

  const handleFileClick = (file) => {
    setSelectedFileContent(file.content);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 flex flex-col p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-center mb-8">
          <img src={TyceLogo} alt="Tyce Logo" className="w-16 h-16" />
        </div>

        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Document Viewer
        </h1>

        {/* File List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {files.map((file) => (
            <div
              key={file.id}
              onClick={() => handleFileClick(file)}
              className="cursor-pointer bg-white p-4 rounded-md shadow hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {file.name}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                Uploaded: {file.date}
              </p>
              <p className="text-sm text-gray-500">Type: {file.type}</p>
            </div>
          ))}
        </div>

        {/* File Content Viewer */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">File Preview</h2>
          <div
            className="p-4 border rounded-md bg-gray-50 text-black whitespace-pre-line"
            style={{ minHeight: '150px' }}
          >
            {selectedFileContent || 'Click on a file to view its content here.'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;

