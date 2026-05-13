import React from 'react';
import { MdClose } from 'react-icons/md';

const AdminModal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl w-full max-w-xl shadow-xl max-h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 sticky top-0 bg-white z-10">
        <h2 className="font-bold text-[#11141B] text-lg">{title}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
          <MdClose size={22} />
        </button>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  </div>
);

export default AdminModal;
