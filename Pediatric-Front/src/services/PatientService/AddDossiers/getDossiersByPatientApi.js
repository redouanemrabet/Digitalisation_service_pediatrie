import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const getDossiersByPatientApi = createApi({
  reducerPath: 'getDossiersByPatientApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    getDossiersByPatient: builder.query({
      query: ({token,patientId}) => ({
        url: `/api/patients/${patientId}/dossiers`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useGetDossiersByPatientQuery } = getDossiersByPatientApi;
