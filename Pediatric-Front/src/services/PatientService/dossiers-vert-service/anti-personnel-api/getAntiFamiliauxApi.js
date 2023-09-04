import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const getAntiPersonnelApi = createApi({
    reducerPath: 'getAntiPersonnelApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        getAntiPersonnel: builder.query({
            query: ({ token, id }) => ({
                url: `/api/anti_personnels/${id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useGetAntiPersonnelQuery } = getAntiPersonnelApi;
