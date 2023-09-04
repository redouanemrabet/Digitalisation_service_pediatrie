import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../functions';

export const medcinsApi = createApi({
    reducerPath: 'medcinsApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        getMedcins: builder.query({
            query: ({ token }) => ({
                url: '/api/users',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useGetMedcinsQuery } = medcinsApi;
