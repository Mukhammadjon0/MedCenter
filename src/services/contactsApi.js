// src/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constant/constant';

export const contactApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    endpoints: (builder) => ({
        contact: builder.query({
            query: () => ({
                url: '/main/',
                method: "POST",
                body: {
                    method: "all_contact",
                    params: {

                    }
                }
            }),
            provideTags: ["Contact"],
        }),
    }),
});

export const { useContactQuery } = contactApi;
