import { useState } from 'react';
import { MdNotifications, MdAccountCircle, MdLogout, MdKeyboardArrowDown, MdPerson } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const AdminHeader = ({ onMenuClick }) => {
  const {t} = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleSignOut = () => {
    dispatch(logout());
    toast.success('Signed out successfully.');
    navigate('/auth/signin');
  };

  return (
    <header className="bg-white border-b border-gray-100 h-16 px-6 flex items-center justify-between shrink-0 shadow-sm">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-gray-500 hover:text-secondary transition-colors"
        aria-label="Open menu"
      >
        <RxHamburgerMenu size={22} />
      </button>
      <div className="hidden lg:block" />

      <div className="flex items-center gap-4">
        {/* Language toggle */}
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'bn' : 'en')}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border group border-secondary/40 text-secondary hover:bg-secondary hover:text-white hover:border-secondary"
          aria-label="Toggle language"
        >
          <span>{i18n.language === 'en' ? 'EN' : 'বাং'}</span>
          <span className="opacity-30">|</span>
          <span className="opacity-40 group-hover:opacity-80 transition-opacity duration-200">
            {i18n.language === 'en' ? 'বাং' : 'EN'}
          </span>
        </button>

        {/* Notification */}
        <button className="relative text-gray-400 hover:text-secondary transition-colors">
          <MdNotifications size={22} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[10px] text-white flex items-center justify-center font-bold">
            3
          </span>
        </button>

        {/* User dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(p => !p)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-secondary transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm shrink-0">
              {user?.name?.charAt(0)?.toUpperCase() || 'A'}
            </div>
            <span className="font-medium hidden sm:block">{user?.name || 'Admin'}</span>
            {user?.role && (
              <span className="hidden sm:block text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-semibold capitalize">
                {user.role}
              </span>
            )}
            <MdKeyboardArrowDown
              size={16}
              className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {dropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 z-20 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100 bg-secondary/5">
                  <p className="font-bold text-[#11141B] text-sm">{user?.name || 'Admin'}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{user?.email || ''}</p>
                </div>
                <NavLink
                  to="/admin/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <MdPerson size={16} className="text-secondary" /> {t('adm_view_profile')}
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-primary hover:bg-primary/5 transition-colors"
                >
                  <MdLogout size={16} /> {t('sign_out')}
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
