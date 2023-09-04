import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const updateCourbeApi = createApi({
  reducerPath: 'updateCourbeApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    updateCourbe: builder.mutation({
      query: ({ body, token, id }) => ({
        url: `/api/courbes/${id}`,
        method: 'PUT',
        body: body,

        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useUpdateCourbeMutation } = updateCourbeApi;
