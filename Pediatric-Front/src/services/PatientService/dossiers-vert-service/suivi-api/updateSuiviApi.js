import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const updateSuiviApi = createApi({
    reducerPath: 'updateSuiviApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        updateSuivi: builder.mutation({
            query: ({ body, token ,id}) => ({
                url: `/api/suivis/${id}`,
                method: 'PUT',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useUpdateSuiviMutation } = updateSuiviApi;
