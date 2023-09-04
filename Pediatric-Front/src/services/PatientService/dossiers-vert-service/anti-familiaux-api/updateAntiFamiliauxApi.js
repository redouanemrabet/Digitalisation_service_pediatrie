import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const updateAntiFamiliauxApi = createApi({
    reducerPath: 'updateAntiFamiliauxApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        updateAntiFamiliaux: builder.mutation({
            query: ({ body, token, id }) => ({
                url: `/api/anti_familiauxes/${id}`,
                method: 'PUT',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useUpdateAntiFamiliauxMutation } = updateAntiFamiliauxApi;
