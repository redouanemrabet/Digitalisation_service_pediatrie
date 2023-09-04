import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const getAllCourbeApi = createApi({
  reducerPath: 'getAllCourbeApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getAllCourbe: builder.query({
      query: ({token ,id}) => ({
        url: `/api/dossier/${id}/courbe`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useGetAllCourbeQuery } = getAllCourbeApi;
