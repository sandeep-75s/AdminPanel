// Modal.js
import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null; // Don't render the modal if it's not visible

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50%]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
