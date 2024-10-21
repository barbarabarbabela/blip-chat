import React from "react";

function DetailsModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            &times;
          </button>
        </div>

        <div className="p-4">{children}</div>

        <div className="flex justify-end p-4 ">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
