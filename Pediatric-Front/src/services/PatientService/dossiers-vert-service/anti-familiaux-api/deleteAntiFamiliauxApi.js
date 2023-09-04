import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';
export const deleteAntiFamiliauxApi = createApi({
    reducerPath: 'deleteAntiFamiliauxApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        deleteAntiFamiliaux: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/anti_familiauxes/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useDeleteAntiFamiliauxApiMutation } = deleteAntiFamiliauxApi;
