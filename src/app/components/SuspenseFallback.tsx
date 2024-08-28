// src/app/components/SuspenseFallback.tsx

import React from 'react';


const SuspenseFallback: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="loader"></div>
        <p className="mt-4 text-lg text-gray-600">Cargando...</p>
      </div>

      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SuspenseFallback;
