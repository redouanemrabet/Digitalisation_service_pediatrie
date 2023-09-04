import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from './functions';

export const registerApi = createApi({
    reducerPath: 'registerApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({ body }) => ({
                url: '/api/users',
                method: 'POST',
                body
            })
        })
    })
});

export const { useRegisterMutation } = registerApi;
