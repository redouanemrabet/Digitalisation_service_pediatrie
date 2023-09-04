import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const addAntiPersonnelApi = createApi({
    reducerPath: 'addAntiPersonnelApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        addAntiPersonnel: builder.mutation({
            query: ({ body, token }) => ({
                url: '/api/anti_personnels',
                method: 'POST',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useAddAntiPersonnelMutation } = addAntiPersonnelApi;
