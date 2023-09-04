import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const addDocumentApi = createApi({
  reducerPath: 'addDocumentApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    addDocument: builder.mutation({
      query: ({ body, token , id }) => ({
        url: `/api/Document/${id}`,
        method: 'POST',
        body: body,

        headers: {
          Authorization: `Bearer ${token}` // Inclure le token dans les en-têtes de la requête
        }
      })
    })
  })
});

export const { useAddDocumentMutation } = addDocumentApi;
