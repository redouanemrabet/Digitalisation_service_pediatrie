import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const addSuiviApi = createApi({
    reducerPath: 'addSuiviApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
      addSuivi: builder.mutation({
            query: ({ body, token }) => ({
                url: '/api/suivis',
                method: 'POST',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useAddSuiviMutation } = addSuiviApi;
