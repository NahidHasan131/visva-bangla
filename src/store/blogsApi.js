import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const blogsApi = createApi({
  reducerPath: 'blogsApi',
  baseQuery,
  tagTypes: ['Blog'],
  endpoints: (builder) => ({

    getBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ['Blog'],
    }),

    getBlogs: builder.query({
      query: ({ page = 1, limit = 10 } = {}) => `/blogs?page=${page}&limit=${limit}`,
      providesTags: ['Blog'],
    }),

    createBlog: builder.mutation({
      query: (body) => ({ url: '/blogs', method: 'POST', body }),
      invalidatesTags: ['Blog'],
    }),

    updateBlog: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/blogs/${id}`, method: 'PATCH', body }),
      invalidatesTags: ['Blog'],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({ url: `/blogs/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Blog'],
    }),

  }),
});

export const {
  useGetBlogQuery,
  useGetBlogsQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
