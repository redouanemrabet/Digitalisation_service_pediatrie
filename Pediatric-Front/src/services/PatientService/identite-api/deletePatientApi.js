import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const deletePatientApi = createApi({
    reducerPath: 'deletePatientApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        deletePatient: builder.mutation({
            query: ({ id, token }) => ({
                url: `/api/patients/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useDeletePatientMutation } = deletePatientApi;
