import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const addPatientIdentiteApi = createApi({
    reducerPath: 'addPatientIdentiteApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        addPatient: builder.mutation({
            query: ({ body, token }) => ({
                url: '/api/patients',
                method: 'POST',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}` // Inclure le token dans les en-têtes de la requête
                }
            })
        })
    })
});

export const { useAddPatientMutation } = addPatientIdentiteApi;
