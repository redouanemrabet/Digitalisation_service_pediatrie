import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const getAllDossiersPatientApi = createApi({
    reducerPath: 'getAllDossiersPatientApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        getAllDossiersPatient: builder.query({
            query: ({ token, patientId }) => ({
                url: `/api/patients/${patientId}/dossiers`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }),
        }),
    }),
});

export const { useGetAllDossiersPatientQuery } = getAllDossiersPatientApi;
