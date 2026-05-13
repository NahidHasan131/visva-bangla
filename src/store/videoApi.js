import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const videoApi = createApi({
  reducerPath: 'videoApi',
  baseQuery,
  tagTypes: ['Video'],
  endpoints: (builder) => ({

    getVideos: builder.query({
      query: () => '/video',
      providesTags: ['Video'],
    }),

    createVideo: builder.mutation({
      query: (body) => ({ url: '/video', method: 'POST', body }),
      invalidatesTags: ['Video'],
    }),

    updateVideo: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/video/${id}`, method: 'PATCH', body }),
      invalidatesTags: ['Video'],
    }),

    deleteVideo: builder.mutation({
      query: (id) => ({ url: `/video/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Video'],
    }),

  }),
});

export const {
  useGetVideosQuery,
  useCreateVideoMutation,
  useUpdateVideoMutation,
  useDeleteVideoMutation,
} = videoApi;
