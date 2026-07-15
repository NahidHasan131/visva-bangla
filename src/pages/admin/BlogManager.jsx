import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'sonner';
import { MdAdd, MdEdit, MdDelete, MdArticle, MdSearch, MdImage } from 'react-icons/md';
import { useGetBlogsQuery, useCreateBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation } from '../../store/blogsApi';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import AdminModal from '../../components/admin/AdminModal';
import AdminFormField from '../../components/admin/AdminFormField';
import ImageInput from '../../components/admin/ImageInput';
import Pagination from '../../components/Media/Pagination';
import ViewToggle from '../../components/admin/ViewToggle';
import useViewMode from '../../lib/useViewMode';

const BlogManager = () => {
  const { t } = useTranslation();

  const schema = yup.object({
    title:   yup.string().required(t('adm_title_required')).min(5, t('adm_min_5')),
    content: yup.string().required(t('adm_content_required')).min(20, t('adm_min_20')),
  });

  const [search, setSearch]           = useState('');
  const [searchParams] = useSearchParams();
  const [page, setPage]               = useState(Number(searchParams.get('page')) || 1);
  const [showForm, setShowForm]       = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [deleteId, setDeleteId]     = useState(null);
  const [image, setImage]           = useState('');
  const [view, setView]             = useViewMode('blog');

  const { data, isLoading } = useGetBlogsQuery({ page, limit: 10 });
  const [createBlog, { isLoading: creating }] = useCreateBlogMutation();
  const [updateBlog, { isLoading: updating }] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();
  const currentUser = useSelector(state => state.auth.user);
  const isAdmin = currentUser?.role === 'admin';

  const allBlogs = data?.data?.blogs || [];
  const blogs = allBlogs;
  const totalPages = data?.pagination?.pages || 1;
  const total = isAdmin ? (data?.pagination?.total || 0) : blogs.length;
  const filtered = blogs.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const openCreate = () => {
    setEditingPost(null);
    setImage('');
    reset({ title: '', content: '' });
    setShowForm(true);
  };

  const openEdit = (post) => {
    setEditingPost(post);
    setImage(post.image || '');
    reset({ title: post.title, content: post.content });
    setShowForm(true);
  };

  const onSubmit = async (data) => {
    const body = { title: data.title, content: data.content, image };
    try {
      if (editingPost) {
        await updateBlog({ id: editingPost._id, ...body }).unwrap();
        toast.success(t('adm_post_updated'));
      } else {
        await createBlog(body).unwrap();
        toast.success(t('adm_post_published'));
      }
      setShowForm(false);
      reset();
      setImage('');
    } catch (err) {
      toast.error(err?.data?.message || t('adm_something_wrong'));
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteBlog(deleteId).unwrap();
      toast.error(t('adm_post_deleted'));
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
            <MdArticle size={30} className="text-(--color-secondary)" />
            <h1 className="text-3xl font-bold text-[#11141B]">{t('adm_blog_posts')}</h1>
          </div>
          <p className="text-sm text-gray-400 mt-1">{total} {t('adm_posts_total')}</p>
        </div>
        {isAdmin && (
          <button onClick={openCreate}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-(--color-secondary) text-white text-sm font-medium hover:bg-[#11141B] transition-colors">
            <MdAdd size={18} /> {t('adm_new_post')}
          </button>
        )}
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder={t('adm_search_posts')}
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-(--color-secondary) transition-colors bg-white" />
        </div>
        <ViewToggle view={view} onChange={setView} />
      </div>

      {/* Post list / grid */}
      <div className={view === 'grid'
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
        : 'flex flex-col gap-3'
      }>
        {isLoading && <p className="text-center py-12 text-gray-400 col-span-full">{t('loading')}</p>}
        {!isLoading && filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100 col-span-full">{t('adm_no_posts_found')}</div>
        )}
        {filtered.map(post => (
          view === 'grid' ? (
            /* ── Grid card ── */
            <div key={post._id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden">
              <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                {post.image
                  ? <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  : <MdImage size={32} className="text-gray-300" />}
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <p className="font-semibold text-[#11141B] line-clamp-2 text-sm">{post.title}</p>
                <p className="text-xs text-gray-400 line-clamp-2 flex-1">{post.content}</p>
                <p className="text-xs text-gray-500">{t('adm_by')} {post.writer?.name || '—'} · {new Date(post.createdAt).toLocaleDateString()}</p>
                {isAdmin && (
                  <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
                    <button onClick={() => openEdit(post)}
                      className="flex-1 py-1.5 rounded-lg text-xs font-medium text-(--color-secondary) hover:bg-secondary/10 transition-colors">
                      {t('adm_edit')}
                    </button>
                    <button onClick={() => setDeleteId(post._id)}
                      className="flex-1 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 transition-colors">
                      {t('adm_delete')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* ── List row ── */
            <div key={post._id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200 flex items-center gap-4 p-4">
              <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100 flex items-center justify-center">
                {post.image
                  ? <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  : <MdImage size={24} className="text-gray-300" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#11141B] line-clamp-1">{post.title}</p>
                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{post.content}</p>
                <p className="text-xs text-gray-500 mt-1">{t('adm_by')} {post.writer?.name || '—'} · {new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {isAdmin && (
                  <>
                    <button onClick={() => openEdit(post)}
                      className="p-2 rounded-lg text-gray-400 hover:text-(--color-secondary) hover:bg-secondary/10 transition-colors">
                      <MdEdit size={18} />
                    </button>
                    <button onClick={() => setDeleteId(post._id)}
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

      {/* Pagination */}
      <Pagination page={page} totalPages={totalPages} total={total} label="posts" limit={10} onPageChange={setPage} />

      {/* Create / Edit modal — admin only */}
      {isAdmin && showForm && (
        <AdminModal title={editingPost ? t('adm_edit_post') : t('adm_new_blog_post')} onClose={() => setShowForm(false)}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            <AdminFormField label={t('adm_cover_image')}>
              <ImageInput value={image} onChange={setImage} />
            </AdminFormField>

            <AdminFormField label={t('adm_title')} error={errors.title?.message}>
              <input {...register('title')} placeholder={t('adm_post_title_placeholder')}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-(--color-secondary) transition-colors" />
            </AdminFormField>

            <AdminFormField label={t('adm_content')} error={errors.content?.message}>
              <textarea {...register('content')} rows={5} placeholder={t('adm_write_content')}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-(--color-secondary) transition-colors resize-none" />
            </AdminFormField>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button type="button" onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                {t('adm_cancel')}
              </button>
              <button type="submit" disabled={creating || updating}
                className="px-5 py-2.5 rounded-xl bg-(--color-secondary) text-white text-sm font-medium hover:bg-[#11141B] transition-colors disabled:opacity-60">
                {creating || updating ? t('adm_saving') : editingPost ? t('adm_save_changes') : t('adm_publish_post')}
              </button>
            </div>
          </form>
        </AdminModal>
      )}

      {/* Delete confirm */}
      {isAdmin && deleteId && (
        <AdminModal title={t('adm_delete_post_confirm')} onClose={() => setDeleteId(null)}>
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

export default BlogManager;
