import React from 'react';

const AuthInput = ({ label, icon, error, children, ...props }) => (
  <div className="flex flex-col gap-1.5">
    {label && <label className="text-sm font-medium text-[#11141B]">{label}</label>}
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-white transition-colors ${error ? 'border-red-400' : 'border-gray-200 focus-within:border-[#62826B]'}`}>
      {icon && <span className="text-gray-400 shrink-0">{icon}</span>}
      {children}
    </div>
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

export default AuthInput;
