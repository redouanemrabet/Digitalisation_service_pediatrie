import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';


export const getParacliniqueApi = createApi({
    reducerPath: 'getParacliniqueApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        getParaclinique: builder.query({
            query: ({ token, id }) => ({
                url: `/api/paracliniques/${id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useGetParacliniqueQuery } = getParacliniqueApi;
