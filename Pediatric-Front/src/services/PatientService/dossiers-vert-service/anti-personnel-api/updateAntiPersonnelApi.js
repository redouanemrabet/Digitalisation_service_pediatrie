import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const updateAntiPersonnelApi = createApi({
    reducerPath: 'updateAntiPersonnelApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        updateAntiPersonnel: builder.mutation({
            query: ({ body, token, id }) => ({
                url: `/api/anti_personnels/${id}`,
                method: 'PUT',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useUpdateAntiPersonnelMutation } = updateAntiPersonnelApi;
