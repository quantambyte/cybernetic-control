import React from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

/**
 * Modal component with a header, close button, and content area.
 * @module Modal
 */
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-50">
      <div className="bg-white w-full max-w-lg mx-auto p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center pb-2">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            aria-label="Close modal"
          >
            ✖
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
