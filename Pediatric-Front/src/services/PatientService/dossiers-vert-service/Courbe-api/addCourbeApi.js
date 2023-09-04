import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const addCourbeApi = createApi({
  reducerPath: 'addCourbeApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    addCourbe: builder.mutation({
      query: ({ body, token }) => ({
        url: '/api/courbes',
        method: 'POST',
        body: body,

        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useAddCourbeMutation } = addCourbeApi;
