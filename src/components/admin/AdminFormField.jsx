import React from 'react';

const AdminFormField = ({ label, error, children }) => (
  <div className="flex flex-col gap-1.5">
    {label && <label className="text-sm font-medium text-[#11141B]">{label}</label>}
    {children}
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

export default AdminFormField;
