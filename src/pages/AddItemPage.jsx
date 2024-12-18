import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TyceLogo from '../assets/TyceLogo.png';

const AddItemPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([
    { name: 'Sales Report Q1', size: '1.2 MB', date: '2024-03-01', type: 'Spreadsheet' },
    { name: 'Revenue Forecast', size: '950 KB', date: '2024-04-15', type: 'Spreadsheet' },
    { name: 'Client Summary', size: '1.5 MB', date: '2024-04-22', type: 'Google Doc' },
    { name: 'Revenue Forecast', size: '950 KB', date: '2024-04-15', type: 'Spreadsheet' },
  ]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? { name: file.name, size: `${(file.size / 1024).toFixed(1)} KB` } : null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newFile = {
        name: selectedFile.name,
        size: selectedFile.size,
        date: new Date().toISOString().split('T')[0], // Hard-coded current date
        type: 'Uploaded File',
      };
      setFileList((prevFiles) => [...prevFiles, newFile]);
      setSelectedFile(null);
    }
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <img src={TyceLogo} alt="Tyce Logo" className="w-16 h-16" />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          File Management
        </h1>

        {/* File Upload Section */}
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">Upload New Files</h2>
          <div className="flex items-center space-x-4">
            {/* Choose File Button */}
            <label
              htmlFor="file-upload"
              className="bg-white border border-gray-400 text-black px-4 py-2 rounded-md cursor-pointer"
            >
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            {/* Selected File Name */}
            <div className="flex-1 border bg-white text-black p-2 rounded-md">
              {selectedFile ? selectedFile.name : 'No file selected'}
            </div>
            {/* Upload Button */}
            <button
              onClick={handleUpload}
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Upload
            </button>
          </div>
        </div>

        {/* Files Table */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">Saved Files</h2>
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="text-left text-gray-700 border-b">
                <th className="p-2 w-1/3">File Name</th>
                <th className="p-2 w-1/5">Size</th>
                <th className="p-2 w-1/5">Date Uploaded</th>
                <th className="p-2 w-1/5">Type</th>
              </tr>
            </thead>
            <tbody>
              {fileList.map((file, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-2 text-gray-700">{file.name}</td>
                  <td className="p-2 text-gray-500">{file.size}</td>
                  <td className="p-2 text-gray-500">{file.date}</td>
                  <td className="p-2 text-gray-500">{file.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-gray-500 text-sm mt-4">
            Total Files: {fileList.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;