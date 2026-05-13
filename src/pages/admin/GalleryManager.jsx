import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'sonner';
import { MdAdd, MdEdit, MdDelete, MdPhotoLibrary, MdSearch, MdImage } from 'react-icons/md';
import { useGetGalleryQuery, useCreateGalleryMutation, useUpdateGalleryMutation, useDeleteGalleryMutation } from '../../store/galleryApi';
import { useSelector } from 'react-redux';
import AdminModal from '../../components/admin/AdminModal';
import AdminFormField from '../../components/admin/AdminFormField';
import ImageInput from '../../components/admin/ImageInput';
import Pagination from '../../components/Media/Pagination';
import { useSearchParams } from 'react-router-dom';

const PER_PAGE = 12;

const schema = yup.object({
  title:    yup.string().required('Title is required').min(3, 'Min 3 characters'),
  location: yup.string().optional(),
});

const GalleryManager = () => {
  const [search, setSearch]           = useState('');
  const [searchParams] = useSearchParams();
  const [page, setPage]               = useState(Number(searchParams.get('page')) || 1);
  const [showForm, setShowForm]       = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId]       = useState(null);
  const [imageUrl, setImageUrl]       = useState('');

  const { data, isLoading } = useGetGalleryQuery();
  const [createGallery, { isLoading: creating }] = useCreateGalleryMutation();
  const [updateGallery, { isLoading: updating }] = useUpdateGalleryMutation();
  const [deleteGallery] = useDeleteGalleryMutation();
  const currentUser = useSelector(state => state.auth.user);
  const isAdmin = currentUser?.role === 'admin';

  const allItems = data?.data || [];
  const items = allItems;
  const filtered = items.filter(i =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const openCreate = () => {
    setEditingItem(null);
    setImageUrl('');
    reset({ title: '' });
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditingItem(item);
    setImageUrl(item.imageUrl || '');
    reset({ title: item.title, location: item.location || '' });
    setShowForm(true);
  };

  const onSubmit = async (data) => {
    const body = { title: data.title, location: data.location, imageUrl };
    try {
      if (editingItem) {
        await updateGallery({ id: editingItem._id, ...body }).unwrap();
        toast.success('Image updated successfully.');
      } else {
        await createGallery(body).unwrap();
        toast.success('Image added successfully.');
      }
      setShowForm(false);
      reset();
      setImageUrl('');
    } catch (err) {
      toast.error(err?.data?.message || 'Something went wrong.');
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteGallery(deleteId).unwrap();
      toast.error('Image deleted.');
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
            <MdPhotoLibrary size={30} className="text-[#62826B]" />
            <h1 className="text-3xl font-bold text-[#11141B]">Gallery</h1>
          </div>
          <p className="text-sm text-gray-400 mt-1">{filtered.length} images total</p>
        </div>
        {isAdmin && (
          <button onClick={openCreate}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#62826B] text-white text-sm font-medium hover:bg-[#11141B] transition-colors">
            <MdAdd size={18} /> Add Image
          </button>
        )}
      </div>

      {/* Search */}
      <div className="relative">
        <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search gallery..."
          value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors bg-white" />
      </div>

      {/* Grid */}
      {isLoading && <p className="text-center py-12 text-gray-400">Loading...</p>}
      {!isLoading && filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100">No images found.</div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paged.map(item => (
          <div key={item._id} className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200 aspect-square bg-gray-100">
            {item.imageUrl
              ? <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              : <div className="w-full h-full flex items-center justify-center"><MdImage size={32} className="text-gray-300" /></div>
            }
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#11141B]/0 group-hover:bg-[#11141B]/50 transition-all duration-200 flex flex-col justify-between p-3 opacity-0 group-hover:opacity-100">
              <div>
                <p className="text-white text-xs font-medium line-clamp-1">{item.title}</p>
                {item.location && <p className="text-gray-300 text-xs mt-0.5">📍 {item.location}</p>}
              </div>
              <div className="flex items-center justify-end gap-1">
                {isAdmin && (
                  <>
                    <button onClick={() => openEdit(item)}
                      className="p-1.5 rounded-lg bg-white/20 text-white hover:bg-white/40 transition-colors">
                      <MdEdit size={15} />
                    </button>
                    <button onClick={() => setDeleteId(item._id)}
                      className="p-1.5 rounded-lg bg-red-500/70 text-white hover:bg-red-500 transition-colors">
                      <MdDelete size={15} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} total={filtered.length} label="images" limit={PER_PAGE} onPageChange={setPage} />

      {/* Create / Edit modal */}
      {showForm && (
        <AdminModal title={editingItem ? 'Edit Image' : 'Add Image'} onClose={() => setShowForm(false)}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            <AdminFormField label="Image">
              <ImageInput value={imageUrl} onChange={setImageUrl} />
            </AdminFormField>

            <AdminFormField label="Title" error={errors.title?.message}>
              <input {...register('title')} placeholder="Image title"
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
            </AdminFormField>

            <AdminFormField label="Location" error={errors.location?.message}>
              <input {...register('location')} placeholder="e.g. Dhaka Studio"
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
            </AdminFormField>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button type="button" onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button type="submit" disabled={creating || updating}
                className="px-5 py-2.5 rounded-xl bg-[#62826B] text-white text-sm font-medium hover:bg-[#11141B] transition-colors disabled:opacity-60">
                {creating || updating ? 'Saving...' : editingItem ? 'Save Changes' : 'Add Image'}
              </button>
            </div>
          </form>
        </AdminModal>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <AdminModal title="Delete Image?" onClose={() => setDeleteId(null)}>
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

export default GalleryManager;
