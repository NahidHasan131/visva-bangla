import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import ViewToggle from '../../components/admin/ViewToggle';
import useViewMode from '../../lib/useViewMode';
import { useSearchParams } from 'react-router-dom';

const PER_PAGE = 10;

const AudioManager = () => {
  const { t } = useTranslation();

  const schema = yup.object({
    title:       yup.string().required(t('adm_title_required')).min(3, t('adm_min_3')),
    description: yup.string().required(t('adm_description_required')).min(10, t('adm_min_10')),
    audioUrl:    yup.string().required(t('adm_audio_url_required')).url(t('adm_valid_url')),
  });

  const [search, setSearch]           = useState('');
  const [searchParams] = useSearchParams();
  const [page, setPage]               = useState(Number(searchParams.get('page')) || 1);
  const [showForm, setShowForm]     = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId]     = useState(null);
  const [thumbnail, setThumbnail]   = useState('');
  const [view, setView]             = useViewMode('audio');

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
        toast.success(t('adm_audio_updated'));
      } else {
        await createAudio(body).unwrap();
        toast.success(t('adm_audio_added'));
      }
      setShowForm(false);
      reset();
      setThumbnail('');
    } catch (err) {
      toast.error(err?.data?.message || t('adm_something_wrong'));
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteAudio(deleteId).unwrap();
      toast.error(t('adm_audio_deleted'));
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
            <MdAudiotrack size={30} className="text-[var(--color-secondary)]" />
            <h1 className="text-3xl font-bold text-[#11141B]">{t('adm_audio')}</h1>
          </div>
          <p className="text-sm text-gray-400 mt-1">{filtered.length} {t('adm_tracks_total')}</p>
        </div>
        {isAdmin && (
          <button onClick={openCreate}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-secondary)] text-white text-sm font-medium hover:bg-[#11141B] transition-colors">
            <MdAdd size={18} /> {t('adm_add_audio')}
          </button>
        )}
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder={t('adm_search_audio')}
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
        {isLoading && <p className="text-center py-12 text-gray-400 col-span-full">{t('loading')}</p>}
        {!isLoading && filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100 col-span-full">{t('adm_no_audio_found')}</div>
        )}
        {paged.map(item => (
          view === 'grid' ? (
            <div key={item._id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden">
              <div className="h-36 bg-[var(--color-secondary)]/8 flex items-center justify-center overflow-hidden">
                {item.thumbnail
                  ? <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                  : <MdMusicNote size={40} className="text-[var(--color-secondary)]/40" />}
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <p className="font-semibold text-[#11141B] line-clamp-2 text-sm">{item.title}</p>
                <p className="text-xs text-gray-400 line-clamp-2 flex-1">{item.description}</p>
                <a href={item.audioUrl} target="_blank" rel="noreferrer"
                  className="text-xs text-[var(--color-secondary)] hover:underline truncate flex items-center gap-1">
                  <MdLink size={12} /> {item.audioUrl}
                </a>
                {isAdmin && (
                  <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
                    <button onClick={() => openEdit(item)}
                      className="flex-1 py-1.5 rounded-lg text-xs font-medium text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-colors">{t('adm_edit')}</button>
                    <button onClick={() => setDeleteId(item._id)}
                      className="flex-1 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 transition-colors">{t('adm_delete')}</button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div key={item._id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200 flex items-center gap-4 p-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[var(--color-secondary)]/10 flex items-center justify-center">
                {item.thumbnail
                  ? <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                  : <MdMusicNote size={24} className="text-[var(--color-secondary)]" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#11141B] line-clamp-1">{item.title}</p>
                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{item.description}</p>
                <div className="flex items-center gap-1 mt-1">
                  <MdLink size={12} className="text-[var(--color-secondary)]" />
                  <a href={item.audioUrl} target="_blank" rel="noreferrer"
                    className="text-xs text-[var(--color-secondary)] hover:underline truncate max-w-xs">{item.audioUrl}</a>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {isAdmin && (
                  <>
                    <button onClick={() => openEdit(item)}
                      className="p-2 rounded-lg text-gray-400 hover:text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-colors">
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
          )
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} total={filtered.length} label="tracks" limit={PER_PAGE} onPageChange={setPage} />

      {/* Create / Edit modal */}
      {isAdmin && showForm && (
        <AdminModal title={editingItem ? t('adm_edit_audio') : t('adm_add_audio')} onClose={() => setShowForm(false)}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            <AdminFormField label={t('adm_thumbnail')}>
              <ImageInput value={thumbnail} onChange={setThumbnail} />
            </AdminFormField>

            <AdminFormField label={t('adm_title')} error={errors.title?.message}>
              <input {...register('title')} placeholder={t('adm_audio_title_placeholder')}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[var(--color-secondary)] transition-colors" />
            </AdminFormField>

            <AdminFormField label={t('adm_description')} error={errors.description?.message}>
              <textarea {...register('description')} rows={3} placeholder={t('adm_short_description')}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[var(--color-secondary)] transition-colors resize-none" />
            </AdminFormField>

            <AdminFormField label={t('adm_audio_url')} error={errors.audioUrl?.message}>
              <input {...register('audioUrl')} placeholder="https://example.com/audio.mp3"
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[var(--color-secondary)] transition-colors" />
            </AdminFormField>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button type="button" onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                {t('adm_cancel')}
              </button>
              <button type="submit" disabled={creating || updating}
                className="px-5 py-2.5 rounded-xl bg-[var(--color-secondary)] text-white text-sm font-medium hover:bg-[#11141B] transition-colors disabled:opacity-60">
                {creating || updating ? t('adm_saving') : editingItem ? t('adm_save_changes') : t('adm_add_audio')}
              </button>
            </div>
          </form>
        </AdminModal>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <AdminModal title={t('adm_delete_audio_confirm')} onClose={() => setDeleteId(null)}>
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

export default AudioManager;
