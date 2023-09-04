import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const getSuiviApi = createApi({
  reducerPath: 'getSuiviApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getSuivi: builder.query({
      query: ({token,id}) => ({
        url: `/api/suivis/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useGetSuiviQuery } = getSuiviApi;
