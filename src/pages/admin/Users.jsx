import React, { useState } from 'react';
import { toast } from 'sonner';
import { MdPeople, MdSearch, MdDelete, MdAdminPanelSettings, MdPerson } from 'react-icons/md';
import { useGetUsersQuery, useUpdateUserRoleMutation, useDeleteUserMutation } from '../../store/usersApi';
import AdminModal from '../../components/admin/AdminModal';

const Users = () => {
  const [search, setSearch]     = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [roleModal, setRoleModal] = useState(null); // { id, name, currentRole }

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
      toast.success(`Role updated to ${newRole}.`);
      setRoleModal(null);
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to update role.');
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteUser(deleteId).unwrap();
      toast.error('User deleted.');
      setDeleteId(null);
    } catch (err) {
      toast.error(err?.data?.message || 'Delete failed.');
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MdPeople size={30} className="text-[#62826B]" />
            <h1 className="text-3xl font-bold text-[#11141B]">Users</h1>
          </div>
          <p className="text-sm text-gray-400 mt-1">{filtered.length} users total</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search by name or email..."
          value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors bg-white" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-5 py-3.5 font-semibold text-gray-500 text-xs uppercase tracking-wide">User</th>
              <th className="text-left px-5 py-3.5 font-semibold text-gray-500 text-xs uppercase tracking-wide hidden md:table-cell">Mobile</th>
              <th className="text-left px-5 py-3.5 font-semibold text-gray-500 text-xs uppercase tracking-wide">Role</th>
              <th className="text-left px-5 py-3.5 font-semibold text-gray-500 text-xs uppercase tracking-wide hidden lg:table-cell">Joined</th>
              <th className="px-5 py-3.5 text-right font-semibold text-gray-500 text-xs uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {isLoading && (
              <tr><td colSpan={5} className="text-center py-12 text-gray-400">Loading...</td></tr>
            )}
            {!isLoading && filtered.length === 0 && (
              <tr><td colSpan={5} className="text-center py-12 text-gray-400">No users found.</td></tr>
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
                    user.role === 'admin' ? 'bg-[#62826B]/10 text-[#62826B]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-5 py-4 text-gray-400 text-xs hidden lg:table-cell">
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setRoleModal({ id: user._id, name: user.name, currentRole: user.role })}
                      className="p-2 rounded-lg text-gray-400 hover:text-[#62826B] hover:bg-[#62826B]/10 transition-colors"
                      title="Change role"
                    >
                      <MdAdminPanelSettings size={18} />
                    </button>
                    <button
                      onClick={() => setDeleteId(user._id)}
                      className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                      title="Delete user"
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

      {/* Role change modal */}
      {roleModal && (
        <AdminModal title={`Change Role — ${roleModal.name}`} onClose={() => setRoleModal(null)}>
          <p className="text-sm text-gray-500 mb-5">
            Current role: <span className="font-semibold capitalize text-[#11141B]">{roleModal.currentRole}</span>
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleRoleChange('admin')}
              disabled={updating || roleModal.currentRole === 'admin'}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#62826B] text-[#62826B] font-medium text-sm hover:bg-[#62826B] hover:text-[#FFEFC5] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <MdAdminPanelSettings size={18} /> Make Admin
            </button>
            <button
              onClick={() => handleRoleChange('user')}
              disabled={updating || roleModal.currentRole === 'user'}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <MdPerson size={18} /> Make User
            </button>
          </div>
        </AdminModal>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <AdminModal title="Delete User?" onClose={() => setDeleteId(null)}>
          <p className="text-sm text-gray-500 mb-5">This action cannot be undone.</p>
          <div className="flex items-center justify-end gap-3">
            <button onClick={() => setDeleteId(null)}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button onClick={confirmDelete}
              className="px-5 py-2.5 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors">
              Delete
            </button>
          </div>
        </AdminModal>
      )}

    </div>
  );
};

export default Users;
