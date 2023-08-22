// src/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constant/constant';

export const serviceApi = createApi({
    reducerPath: "service",
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    endpoints: (builder) => ({
        service: builder.query({
            query: () => ({
                url: '/main/',
                method: "POST",
                body: {
                    method: "all_services",
                    params: {

                    }
                }
            }),
            provideTags: ["Service"],
        }),
        serviceDetail: builder.query({
            query: (id) => ({
                url: '/main/',
                method: "POST",
                body: {
                    method: "services_id",
                    params: {
                        pk: id
                    }
                }
            }),
            provideTags: ["Service"],
        }),
    }),
});

export const { useServiceQuery, useServiceDetailQuery } = serviceApi;
