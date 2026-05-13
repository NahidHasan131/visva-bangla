import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({ url: `/users/${id}/role`, method: 'PATCH', body: { role } }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `/users/${id}`, method: 'DELETE' }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserRoleMutation, useDeleteUserMutation } = usersApi;