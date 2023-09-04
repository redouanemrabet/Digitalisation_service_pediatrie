import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '../../../functions';
import { updateExamenPhysiqueApi } from './updateExamenPhysiqueApi';

export const getExamenPhysiqueApi = createApi({
    reducerPath: 'getExamenPhysiqueApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        getExamenPhysique: builder.query({
            query: ({ token, id }) => ({
                url: `/api/examen_physiques/${id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const { useGetExamenPhysiqueQuery } = getExamenPhysiqueApi;
