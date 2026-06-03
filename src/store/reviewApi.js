import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery,
  tagTypes: ['Review'],
  endpoints: (builder) => ({

    getReview: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ['Review'],
    }),

    getReviews: builder.query({
      query: ({ page = 1, limit = 10 } = {}) => `/review?page=${page}&limit=${limit}`,
      providesTags: ['Review'],
    }),

    createReview: builder.mutation({
      query: (body) => ({ url: '/review', method: 'POST', body }),
      invalidatesTags: ['Review'],
    }),

    updateReview: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/review/${id}`, method: 'PUT', body }),
      invalidatesTags: ['Review'],
    }),

    deleteReview: builder.mutation({
      query: (id) => ({ url: `/review/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Review'],
    }),

  }),
});

export const {
  useGetReviewQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation
} = reviewApi;
