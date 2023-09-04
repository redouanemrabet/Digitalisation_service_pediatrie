import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const getFormByDossierApi = createApi({
  reducerPath: 'getFormByDossierApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getFormByDossier: builder.query({
      query: ({token,dossierId}) => ({
        url: `/api/patients/${dossierId}/forms`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
                }
            })
    })
    })
});

export const { useGetFormByDossierQuery } = getFormByDossierApi;
