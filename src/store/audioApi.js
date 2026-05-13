import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const audioApi = createApi({
  reducerPath: 'audioApi',
  baseQuery,
  tagTypes: ['Audio'],
  endpoints: (builder) => ({

    getAudios: builder.query({
      query: () => '/audio',
      providesTags: ['Audio'],
    }),

    getAudio: builder.query({
      query: (id) => `/audio/${id}`,
      providesTags: ['Audio'],
    }),

    createAudio: builder.mutation({
      query: (body) => ({ url: '/audio', method: 'POST', body }),
      invalidatesTags: ['Audio'],
    }),

    updateAudio: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/audio/${id}`, method: 'PATCH', body }),
      invalidatesTags: ['Audio'],
    }),

    deleteAudio: builder.mutation({
      query: (id) => ({ url: `/audio/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Audio'],
    }),

  }),
});

export const {
  useGetAudiosQuery,
  useGetAudioQuery,
  useCreateAudioMutation,
  useUpdateAudioMutation,
  useDeleteAudioMutation,
} = audioApi;
