import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const addExamenPhysiqueApi = createApi({
    reducerPath: 'addExamenPhysiqueApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        addExamenPhysique: builder.mutation({
            query: ({ body, token }) => ({
                url: '/api/examen_physiques',
                method: 'POST',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useAddExamenPhysiqueMutation } = addExamenPhysiqueApi;
