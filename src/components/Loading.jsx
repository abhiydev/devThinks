import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-gray-200 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-300 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;