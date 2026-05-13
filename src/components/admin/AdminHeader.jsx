import React, { useState } from 'react';
import { MdNotifications, MdAccountCircle, MdLogout, MdKeyboardArrowDown, MdPerson } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'sonner';

const AdminHeader = ({ onMenuClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
    toast.success('Signed out successfully.');
    navigate('/auth/signin');
  };

  return (
    <header className="bg-white border-b border-gray-200 h-16 px-6 flex items-center justify-between shrink-0">
      <button onClick={onMenuClick} className="lg:hidden text-gray-500 hover:text-[#62826B] transition-colors" aria-label="Open menu">
        <RxHamburgerMenu size={22} />
      </button>
      <div className="hidden lg:block" />

      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-[#62826B] transition-colors relative">
          <MdNotifications size={22} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#62826B] rounded-full text-[10px] text-white flex items-center justify-center">3</span>
        </button>

        {/* User dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(p => !p)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#62826B] transition-colors"
          >
            <MdAccountCircle size={28} className="text-[#62826B]" />
            <span className="font-medium hidden sm:block">{user?.name || 'Admin'}</span>
            {user?.role && (
              <span className="hidden sm:block text-xs px-2 py-0.5 rounded-full bg-[#62826B]/10 text-[#62826B] font-medium capitalize">
                {user.role}
              </span>
            )}
            <MdKeyboardArrowDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 z-20 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="font-semibold text-[#11141B] text-sm">{user?.name || 'Admin'}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{user?.email || ''}</p>
                </div>
                <NavLink to="/admin/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  <MdPerson size={16} /> View Profile
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
                >
                  <MdLogout size={16} /> Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
