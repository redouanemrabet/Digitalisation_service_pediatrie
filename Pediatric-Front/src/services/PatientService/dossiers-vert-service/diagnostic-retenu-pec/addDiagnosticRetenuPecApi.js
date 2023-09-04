import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const addDiagnosticRetenuPecApi = createApi({
    reducerPath: 'addDiagnosticRetenuPecApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        addDiagnosticRetenuPec: builder.mutation({
            query: ({ body, token }) => ({
                url: '/api/diagnostic_retenu_p_e_cs',
                method: 'POST',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useAddDiagnosticRetenuPecMutation } = addDiagnosticRetenuPecApi;
