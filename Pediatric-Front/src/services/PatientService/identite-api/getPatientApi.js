import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getPatient: builder.query({
      query: ({token,id}) => ({
        url: `/api/patients/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useGetPatientQuery } = patientApi;
