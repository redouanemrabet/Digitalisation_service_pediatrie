import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const getAntiFamiliauxApi = createApi({
    reducerPath: 'getAntiFamiliauxApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        getAntiFamiliaux: builder.query({
            query: ({ token, id }) => ({
                url: `/api/anti_familiauxes/${id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useGetAntiFamiliauxQuery } = getAntiFamiliauxApi;
