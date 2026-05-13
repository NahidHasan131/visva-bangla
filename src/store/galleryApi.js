import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery,
  tagTypes: ['Gallery'],
  endpoints: (builder) => ({

    getGallery: builder.query({
      query: () => '/gallery',
      providesTags: ['Gallery'],
    }),

    createGallery: builder.mutation({
      query: (body) => ({ url: '/gallery', method: 'POST', body }),
      invalidatesTags: ['Gallery'],
    }),

    updateGallery: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/gallery/${id}`, method: 'PATCH', body }),
      invalidatesTags: ['Gallery'],
    }),

    deleteGallery: builder.mutation({
      query: (id) => ({ url: `/gallery/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Gallery'],
    }),

  }),
});

export const {
  useGetGalleryQuery,
  useCreateGalleryMutation,
  useUpdateGalleryMutation,
  useDeleteGalleryMutation,
} = galleryApi;
