import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const addAntiFamiliauxApi = createApi({
    reducerPath: 'addAntiFamiliauxApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        addAntiFamiliaux: builder.mutation({
            query: ({ body, token }) => ({
                url: '/api/anti_familiauxes',
                method: 'POST',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useAddAntiFamiliauxMutation } = addAntiFamiliauxApi;
