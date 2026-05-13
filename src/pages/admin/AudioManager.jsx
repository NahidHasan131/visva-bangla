import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'sonner';
import { MdAdd, MdEdit, MdDelete, MdAudiotrack, MdSearch, MdMusicNote, MdLink } from 'react-icons/md';
import { useGetAudiosQuery, useCreateAudioMutation, useUpdateAudioMutation, useDeleteAudioMutation } from '../../store/audioApi';
import { useSelector } from 'react-redux';
import AdminModal from '../../components/admin/AdminModal';
import AdminFormField from '../../components/admin/AdminFormField';
import ImageInput from '../../components/admin/ImageInput';
import Pagination from '../../components/Media/Pagination';
import { useSearchParams } from 'react-router-dom';

const PER_PAGE = 10;

const schema = yup.object({
  title:       yup.string().required('Title is required').min(3, 'Min 3 characters'),
  description: yup.string().required('Description is required').min(10, 'Min 10 characters'),
  audioUrl:    yup.string().required('Audio URL is required').url('Enter a valid URL'),
});

const AudioManager = () => {
  const [search, setSearch]           = useState('');
  const [searchParams] = useSearchParams();
  const [page, setPage]               = useState(Number(searchParams.get('page')) || 1);
  const [showForm, setShowForm]     = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId]     = useState(null);
  const [thumbnail, setThumbnail]   = useState('');

  const { data, isLoading } = useGetAudiosQuery();
  const [createAudio, { isLoading: creating }] = useCreateAudioMutation();
  const [updateAudio, { isLoading: updating }] = useUpdateAudioMutation();
  const [deleteAudio] = useDeleteAudioMutation();
  const currentUser = useSelector(state => state.auth.user);
  const isAdmin = currentUser?.role === 'admin';

  const allAudios = data?.data || [];
  const audios = allAudios;
  const filtered = audios.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const openCreate = () => {
    setEditingItem(null);
    setThumbnail('');
    reset({ title: '', description: '', audioUrl: '' });
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditingItem(item);
    setThumbnail(item.thumbnail || '');
    reset({ title: item.title, description: item.description, audioUrl: item.audioUrl });
    setShowForm(true);
  };

  const onSubmit = async (data) => {
    const body = { ...data, thumbnail };
    try {
      if (editingItem) {
        await updateAudio({ id: editingItem._id, ...body }).unwrap();
        toast.success('Audio updated successfully.');
      } else {
        await createAudio(body).unwrap();
        toast.success('Audio added successfully.');
      }
      setShowForm(false);
      reset();
      setThumbnail('');
    } catch (err) {
      toast.error(err?.data?.message || 'Something went wrong.');
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteAudio(deleteId).unwrap();
      toast.error('Audio deleted.');
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
            <MdAudiotrack size={30} className="text-[#62826B]" />
            <h1 className="text-3xl font-bold text-[#11141B]">Audio</h1>
          </div>
          <p className="text-sm text-gray-400 mt-1">{filtered.length} tracks total</p>
        </div>
        {isAdmin && (
          <button onClick={openCreate}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#62826B] text-white text-sm font-medium hover:bg-[#11141B] transition-colors">
            <MdAdd size={18} /> Add Audio
          </button>
        )}
      </div>

      {/* Search */}
      <div className="relative">
        <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search audio..."
          value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors bg-white" />
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {isLoading && <p className="text-center py-12 text-gray-400">Loading...</p>}
        {!isLoading && filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100">No audio found.</div>
        )}
        {paged.map(item => (
          <div key={item._id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200 flex items-center gap-4 p-4">

            {/* Thumbnail */}
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#62826B]/10 flex items-center justify-center">
              {item.thumbnail
                ? <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                : <MdMusicNote size={24} className="text-[#62826B]" />}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#11141B] line-clamp-1">{item.title}</p>
              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{item.description}</p>
              <div className="flex items-center gap-1 mt-1">
                <MdLink size={12} className="text-[#62826B]" />
                <a href={item.audioUrl} target="_blank" rel="noreferrer"
                  className="text-xs text-[#62826B] hover:underline truncate max-w-xs">
                  {item.audioUrl}
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 shrink-0">
              {isAdmin && (
                <>
                  <button onClick={() => openEdit(item)}
                    className="p-2 rounded-lg text-gray-400 hover:text-[#62826B] hover:bg-[#62826B]/10 transition-colors">
                    <MdEdit size={18} />
                  </button>
                  <button onClick={() => setDeleteId(item._id)}
                    className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                    <MdDelete size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} total={filtered.length} label="tracks" limit={PER_PAGE} onPageChange={setPage} />

      {/* Create / Edit modal */}
      {isAdmin && showForm && (
        <AdminModal title={editingItem ? 'Edit Audio' : 'Add Audio'} onClose={() => setShowForm(false)}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            <AdminFormField label="Thumbnail">
              <ImageInput value={thumbnail} onChange={setThumbnail} />
            </AdminFormField>

            <AdminFormField label="Title" error={errors.title?.message}>
              <input {...register('title')} placeholder="Audio title"
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
            </AdminFormField>

            <AdminFormField label="Description" error={errors.description?.message}>
              <textarea {...register('description')} rows={3} placeholder="Short description..."
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors resize-none" />
            </AdminFormField>

            <AdminFormField label="Audio URL" error={errors.audioUrl?.message}>
              <input {...register('audioUrl')} placeholder="https://example.com/audio.mp3"
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
            </AdminFormField>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button type="button" onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button type="submit" disabled={creating || updating}
                className="px-5 py-2.5 rounded-xl bg-[#62826B] text-white text-sm font-medium hover:bg-[#11141B] transition-colors disabled:opacity-60">
                {creating || updating ? 'Saving...' : editingItem ? 'Save Changes' : 'Add Audio'}
              </button>
            </div>
          </form>
        </AdminModal>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <AdminModal title="Delete Audio?" onClose={() => setDeleteId(null)}>
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

export default AudioManager;
