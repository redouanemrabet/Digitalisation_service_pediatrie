import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const addParacliniqueApi = createApi({
  reducerPath: 'addParacliniqueApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    addParaclinique: builder.mutation({
      query: ({ body, token }) => ({
        url: '/api/paracliniques',
        method: 'POST',
        body: body,

        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useAddParacliniqueMutation } = addParacliniqueApi;
