import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const addDossierApi = createApi({
    reducerPath: 'addDossierApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        addDossier: builder.mutation({
            query: ({ body, token }) => ({
                url: '/api/dossiers',
                method: 'POST',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}` // Inclure le token dans les en-têtes de la requête
                }
            })
        })
    })
});

export const { useAddDossierMutation } = addDossierApi;
