import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const getAllDossierApi = createApi({
  reducerPath: 'getAllDossierApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getAllDossier: builder.query({
      query: ({token}) => ({
        url: '/api/dossiers',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useGetAllDossierQuery } = getAllDossierApi;
