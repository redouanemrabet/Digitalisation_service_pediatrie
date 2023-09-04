import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const getPatientByIpApi = createApi({
  reducerPath: 'getPatientByIpApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getPatientByIp: builder.query({
      query: ({token,ip}) => ({
        url: `/api/patients/${ip}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useGetPatientByIpQuery } = getPatientByIpApi;
