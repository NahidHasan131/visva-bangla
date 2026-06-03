import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'sonner';
import { MdAdd, MdEdit, MdDelete, MdSearch, MdStar, MdCheckCircle, MdCancel } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { useGetReviewsQuery, useCreateReviewMutation, useUpdateReviewMutation, useDeleteReviewMutation } from '../../store/reviewApi';
import { useSelector } from 'react-redux';
import AdminModal from '../../components/admin/AdminModal';
import AdminFormField from '../../components/admin/AdminFormField';
import ViewToggle from '../../components/admin/ViewToggle';
import useViewMode from '../../lib/useViewMode';

const schema = yup.object({
  name:        yup.string().required('Name is required').min(2, 'Min 2 characters'),
  role:        yup.string().required('Role is required'),
  rating:      yup.number().min(1).max(5).required('Rating is required'),
  description: yup.string().required('Review is required').min(10, 'Min 10 characters'),
});

const StarDisplay = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} size={12} className={i < rating ? 'text-yellow-400' : 'text-gray-200'} />
    ))}
  </div>
);

const ReviewManager = () => {
  const [search, setSearch]           = useState('');
  const [showForm, setShowForm]       = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId]       = useState(null);
  const [view, setView]               = useViewMode('reviews');

  const { data, isLoading } = useGetReviewsQuery();
  const [createReview, { isLoading: creating }] = useCreateReviewMutation();
  const [updateReview, { isLoading: updating }] = useUpdateReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();
  const currentUser = useSelector(state => state.auth.user);
  const isAdmin = currentUser?.role === 'admin';

  const allReviews = data?.data || [];
  const filtered = allReviews.filter(r =>
    (r.title || r.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.description || '').toLowerCase().includes(search.toLowerCase())
  );

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const openCreate = () => {
    setEditingItem(null);
    reset({ name: '', role: '', rating: 5, description: '' });
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditingItem(item);
    reset({
      name:        item.title || item.name || '',
      role:        item.role || '',
      rating:      item.rating || 5,
      description: item.description || '',
    });
    setShowForm(true);
  };

  const handleApproveToggle = async (item) => {
    try {
      await updateReview({ id: item._id, approve: !item.approve }).unwrap();
      toast.success(item.approve ? 'Review unapproved.' : 'Review approved!');
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to update.');
    }
  };

  const onSubmit = async (formData) => {    const body = {
      name:        formData.name,
      role:        formData.role,
      rating:      String(formData.rating),
      description: formData.description,
    };
    try {
      if (editingItem) {
        await updateReview({ id: editingItem._id, ...body }).unwrap();
        toast.success('Review updated.');
      } else {
        await createReview(body).unwrap();
        toast.success('Review added.');
      }
      setShowForm(false);
      reset();
    } catch (err) {
      toast.error(err?.data?.message || 'Something went wrong.');
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteReview(deleteId).unwrap();
      toast.error('Review deleted.');
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
            <MdStar size={30} className="text-[var(--color-secondary)]" />
            <h1 className="text-3xl font-bold text-[#11141B]">Reviews</h1>
          </div>
          <p className="text-sm text-gray-400 mt-1">{filtered.length} reviews total</p>
        </div>
        {isAdmin && (
          <button onClick={openCreate}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-secondary)] text-white text-sm font-medium hover:bg-[#11141B] transition-colors">
            <MdAdd size={18} /> Add Review
          </button>
        )}
      </div>

      {/* Search + toggle */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search reviews..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[var(--color-secondary)] transition-colors bg-white" />
        </div>
        <ViewToggle view={view} onChange={setView} />
      </div>

      {/* List / Grid */}
      <div className={view === 'grid'
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
        : 'flex flex-col gap-3'
      }>
        {isLoading && <p className="text-center py-12 text-gray-400 col-span-full">Loading...</p>}
        {!isLoading && filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100 col-span-full">No reviews found.</div>
        )}

        {filtered.map(item => (
          view === 'grid' ? (
            /* Grid card */
            <div key={item._id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col p-5 gap-3">
              <div className="flex items-center justify-between">
                <StarDisplay rating={item.rating} />
                <span className="text-xs text-gray-400">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 italic line-clamp-3 flex-1">"{item.description}"</p>
              <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-bold text-sm flex items-center justify-center shrink-0">
                  {(item.title || item.name || '?').charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-[#11141B] truncate">{item.title || item.name}</p>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
              {/* Approve toggle */}
              <button
                onClick={() => handleApproveToggle(item)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  item.approve
                    ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {item.approve
                  ? <><MdCheckCircle size={14} /> Approved</>
                  : <><MdCancel size={14} /> Not Approved</>
                }
              </button>
              {isAdmin && (
                <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
                  <button onClick={() => openEdit(item)}
                    className="flex-1 py-1.5 rounded-lg text-xs font-medium text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-colors">Edit</button>
                  <button onClick={() => setDeleteId(item._id)}
                    className="flex-1 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 transition-colors">Delete</button>
                </div>
              )}
            </div>
          ) : (
            /* List row */
            <div key={item._id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200 flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-bold text-sm flex items-center justify-center shrink-0">
                {(item.title || item.name || '?').charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-[#11141B] text-sm">{item.title || item.name}</p>
                  <span className="text-xs text-gray-400">· {item.role}</span>
                </div>
                <StarDisplay rating={item.rating} />
                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1 italic">"{item.description}"</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0 hidden md:block">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
              {isAdmin && (
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => openEdit(item)}
                    className="p-2 rounded-lg text-gray-400 hover:text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-colors">
                    <MdEdit size={18} />
                  </button>
                  <button onClick={() => setDeleteId(item._id)}
                    className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                    <MdDelete size={18} />
                  </button>
                </div>
              )}
            </div>
          )
        ))}
      </div>

      {/* Create / Edit modal */}
      {isAdmin && showForm && (
        <AdminModal title={editingItem ? 'Edit Review' : 'Add Review'} onClose={() => setShowForm(false)}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            <div className="grid grid-cols-2 gap-4">
              <AdminFormField label="Name" error={errors.name?.message}>
                <input {...register('name')} placeholder="Reviewer name"
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[var(--color-secondary)] transition-colors" />
              </AdminFormField>
              <AdminFormField label="Role" error={errors.role?.message}>
                <input {...register('role')} placeholder="e.g. Student, Seeker"
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[var(--color-secondary)] transition-colors" />
              </AdminFormField>
            </div>

            <AdminFormField label="Rating (1–5)" error={errors.rating?.message}>
              <input {...register('rating')} type="number" min={1} max={5}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[var(--color-secondary)] transition-colors w-24" />
            </AdminFormField>

            <AdminFormField label="Review" error={errors.description?.message}>
              <textarea {...register('description')} rows={4} placeholder="Review text..."
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[var(--color-secondary)] transition-colors resize-none" />
            </AdminFormField>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button type="button" onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button type="submit" disabled={creating || updating}
                className="px-5 py-2.5 rounded-xl bg-[var(--color-secondary)] text-white text-sm font-medium hover:bg-[#11141B] transition-colors disabled:opacity-60">
                {creating || updating ? 'Saving...' : editingItem ? 'Save Changes' : 'Add Review'}
              </button>
            </div>
          </form>
        </AdminModal>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <AdminModal title="Delete Review?" onClose={() => setDeleteId(null)}>
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

export default ReviewManager;
