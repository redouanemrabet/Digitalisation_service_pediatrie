import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../functions';

export const updatePatientApi = createApi({
  reducerPath: 'updatePatientApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    updatePatient: builder.mutation({
      query: ({ body, token,id }) => ({
        url: `/api/patients/${id}`,
        method: 'PUT',
                body: body,

        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useUpdatePatientMutation } = updatePatientApi;
