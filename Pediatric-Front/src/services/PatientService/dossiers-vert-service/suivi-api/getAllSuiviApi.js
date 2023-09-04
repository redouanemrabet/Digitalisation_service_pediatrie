import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const getAllSuiviApi = createApi({
  reducerPath: 'getAllSuiviApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getAllSuivi: builder.query({
      query: ({token,id}) => ({
        url: `/api/dossier/${id}/suivis`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useGetAllSuiviQuery } = getAllSuiviApi;
