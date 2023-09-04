import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';

export const updateDiagnosticRetenuPecApi = createApi({
    reducerPath: 'updateDiagnosticRetenuPecApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        updateDiagnosticRetenuPec: builder.mutation({
            query: ({ body, token, id }) => ({
                url: `/api/diagnostic_retenu_p_e_cs/${id}`,
                method: 'PUT',
                body: body,

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useUpdateDiagnosticRetenuPecMutation } = updateDiagnosticRetenuPecApi;
