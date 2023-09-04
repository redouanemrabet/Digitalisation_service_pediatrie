import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const getDiagnosticRetenuPecApi = createApi({
  reducerPath: 'getDiagnosticRetenuPecApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getDiagnosticRetenuPec: builder.query({
      query: ({ token, id }) => ({
        url: `/api/diagnostic_retenu_p_e_cs/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useGetDiagnosticRetenuPecQuery } = getDiagnosticRetenuPecApi;
