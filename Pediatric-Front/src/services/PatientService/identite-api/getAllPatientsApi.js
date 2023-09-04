import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: ({token}) => ({
        url: '/api/patients',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        })
  })
});

export const { useGetPatientsQuery } = patientsApi;
