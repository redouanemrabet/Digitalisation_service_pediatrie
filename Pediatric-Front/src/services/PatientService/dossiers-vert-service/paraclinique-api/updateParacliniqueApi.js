import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const updateParacliniqueApi = createApi({
    reducerPath: 'updateParacliniqueApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        updateParaclinique: builder.mutation({
            query: ({ body, token, id }) => ({
                url: `/api/paracliniques/${id}`,
                method: 'PUT',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useUpdateParacliniqueMutation } = updateParacliniqueApi;
