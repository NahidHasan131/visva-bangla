import React, { useState } from 'react';
import { toast } from 'sonner';
import { MdPeople, MdSearch, MdDelete, MdAdminPanelSettings, MdPerson } from 'react-icons/md';
import { useGetUsersQuery, useUpdateUserRoleMutation, useDeleteUserMutation } from '../../store/usersApi';
import AdminModal from '../../components/admin/AdminModal';
import ViewToggle from '../../components/admin/ViewToggle';
import { useTranslation } from 'react-i18next';

const Users = () => {
  const { t } = useTranslation();
  const [search, setSearch]     = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [roleModal, setRoleModal] = useState(null);
  const [view, setView]         = useState('list');

  const { data, isLoading } = useGetUsersQuery();
  const [updateRole, { isLoading: updating }] = useUpdateUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();

  const users = Array.isArray(data?.data) ? data.data :
                Array.isArray(data?.data?.users) ? data.data.users :
                Array.isArray(data) ? data : [];
  const filtered = users.filter(u =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase())
  );

  const handleRoleChange = async (newRole) => {
    try {
      await updateRole({ id: roleModal.id, role: newRole }).unwrap();
      toast.success(`${t('adm_role_updated_to')} ${newRole}.`);
      setRoleModal(null);
    } catch (err) {
      toast.error(err?.data?.message || t('adm_role_update_failed'));
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteUser(deleteId).unwrap();
      toast.error(t('adm_user_deleted'));
      setDeleteId(null);
    } catch (err) {
      toast.error(err?.data?.message || t('adm_delete_failed'));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MdPeople size={30} className="text-(--color-secondary)" />
            <h1 className="text-3xl font-bold text-[#11141B]">{t('adm_users')}</h1>
          </div>
          <p className="text-sm text-gray-400 mt-1">{filtered.length} {t('adm_users_total')}</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder={t('adm_search_users')}
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-(--color-secondary) transition-colors bg-white" />
        </div>
        <ViewToggle view={view} onChange={setView} />
      </div>

      {/* Grid view */}
      {view === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading && <p className="text-center py-12 text-gray-400 col-span-full">{t('loading')}</p>}
          {!isLoading && filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100 col-span-full">{t('adm_no_users_found')}</div>
          )}
          {filtered.map(user => (
            <div key={user._id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200 p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 text-(--color-secondary) font-bold text-base flex items-center justify-center shrink-0">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[#11141B] text-sm truncate">{user.name}</p>
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className={`px-2.5 py-1 rounded-full font-medium capitalize ${
                  user.role === 'admin' ? 'bg-secondary/10 text-(--color-secondary)' : 'bg-gray-100 text-gray-600'
                }`}>{user.role}</span>
                <span className="text-gray-400">{user.mobile || '—'}</span>
              </div>
              <p className="text-xs text-gray-400">
                {t('adm_joined')}: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '—'}
              </p>
              <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
                <button
                  onClick={() => setRoleModal({ id: user._id, name: user.name, currentRole: user.role })}
                  className="flex-1 py-1.5 rounded-lg text-xs font-medium text-(--color-secondary) hover:bg-secondary/10 transition-colors flex items-center justify-center gap-1"
                >
                  <MdAdminPanelSettings size={14} /> {t('adm_role')}
                </button>
                <button
                  onClick={() => setDeleteId(user._id)}
                  className="flex-1 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 transition-colors flex items-center justify-center gap-1"
                >
                  <MdDelete size={14} /> {t('adm_delete')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List / Table view */}
      {view === 'list' && (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3.5 font-semibold text-gray-500 text-xs uppercase tracking-wide">{t('adm_user')}</th>
                <th className="text-left px-5 py-3.5 font-semibold text-gray-500 text-xs uppercase tracking-wide hidden md:table-cell">{t('adm_mobile')}</th>
                <th className="text-left px-5 py-3.5 font-semibold text-gray-500 text-xs uppercase tracking-wide">{t('adm_role')}</th>
                <th className="text-left px-5 py-3.5 font-semibold text-gray-500 text-xs uppercase tracking-wide hidden lg:table-cell">{t('adm_joined')}</th>
                <th className="px-5 py-3.5 text-right font-semibold text-gray-500 text-xs uppercase tracking-wide">{t('adm_actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading && (
                <tr><td colSpan={5} className="text-center py-12 text-gray-400">{t('loading')}</td></tr>
              )}
              {!isLoading && filtered.length === 0 && (
                <tr><td colSpan={5} className="text-center py-12 text-gray-400">{t('adm_no_users_found')}</td></tr>
              )}
              {filtered.map(user => (
                <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="font-medium text-[#11141B]">{user.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{user.email}</p>
                  </td>
                  <td className="px-5 py-4 text-gray-500 hidden md:table-cell">{user.mobile || '—'}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${
                      user.role === 'admin' ? 'bg-secondary/10 text-(--color-secondary)' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-400 text-xs hidden lg:table-cell">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setRoleModal({ id: user._id, name: user.name, currentRole: user.role })}
                        className="p-2 rounded-lg text-gray-400 hover:text-(--color-secondary) hover:bg-secondary/10 transition-colors"
                        title={t('adm_change_role')}
                      >
                        <MdAdminPanelSettings size={18} />
                      </button>
                      <button
                        onClick={() => setDeleteId(user._id)}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        title={t('adm_delete_user')}
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Role change modal */}
      {roleModal && (
        <AdminModal title={`${t('adm_change_role')} — ${roleModal.name}`} onClose={() => setRoleModal(null)}>
          <p className="text-sm text-gray-500 mb-5">
            {t('adm_current_role')}: <span className="font-semibold capitalize text-[#11141B]">{roleModal.currentRole}</span>
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleRoleChange('admin')}
              disabled={updating || roleModal.currentRole === 'admin'}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-(--color-secondary) text-(--color-secondary) font-medium text-sm hover:bg-(--color-secondary) hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <MdAdminPanelSettings size={18} /> {t('adm_make_admin')}
            </button>
            <button
              onClick={() => handleRoleChange('user')}
              disabled={updating || roleModal.currentRole === 'user'}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <MdPerson size={18} /> {t('adm_make_user')}
            </button>
          </div>
        </AdminModal>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <AdminModal title={t('adm_delete_user_confirm')} onClose={() => setDeleteId(null)}>
          <p className="text-sm text-gray-500 mb-5">{t('adm_cannot_undo')}</p>
          <div className="flex items-center justify-end gap-3">
            <button onClick={() => setDeleteId(null)}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              {t('adm_cancel')}
            </button>
            <button onClick={confirmDelete}
              className="px-5 py-2.5 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors">
              {t('adm_delete')}
            </button>
          </div>
        </AdminModal>
      )}

    </div>
  );
};

export default Users;
