import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const updateExamenPhysiqueApi = createApi({
    reducerPath: 'updateExamenPhysiqueApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        updateExamenPhysique: builder.mutation({
            query: ({ body, token, id }) => ({
                url: `/api/examen_physiques/${id}`,
                method: 'PUT',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useUpdateExamenPhysiqueMutation } = updateExamenPhysiqueApi;
