import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../functions';

export const deleteMedcinApi = createApi({
  reducerPath: 'deleteMedcinApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    deleteMedcin: builder.mutation({
      query: ({ id, token }) => ({
        url: `/api/users/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useDeleteMedcinMutation } = deleteMedcinApi;
