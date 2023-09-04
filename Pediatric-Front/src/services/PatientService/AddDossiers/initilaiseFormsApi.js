import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const initialiseFormsApi = createApi({
  reducerPath: 'initialiseFormsApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    initialiseForms: builder.mutation({
      query: ({token , ddossierId }) => ({
        url: `/api/patients/${ddossierId}/initialisation`,
        method: 'POST',


        headers: {
          Authorization: `Bearer ${token}` // Inclure le token dans les en-têtes de la requête
        }
      })
    })
  })
});

export const { useInitialiseFormsMutation } = initialiseFormsApi;
