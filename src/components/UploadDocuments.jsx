import React from 'react';

const UploadDocuments = () => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-gray-700 mb-2">Attach Documents</label>
      <input
        type="file"
        className="border p-2 rounded-md w-full bg-white"
      />
    </div>
  );
};

export default UploadDocuments;

