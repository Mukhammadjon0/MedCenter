// src/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constant/constant';

export const doctorsApi = createApi({
    reducerPath: "doctors",
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    endpoints: (builder) => ({
        doctors: builder.query({
            query: () => ({
                url: '/main/',
                method: "POST",
                body: {
                    method: "doc_list",
                    params: {

                    }
                }
            }),
            provideTags: ["Doctors"],
        }),
        doctorsDetail: builder.query({
            query: (id) => ({
                url: '/main/',
                method: "POST",
                body: {
                    method: "price_in_doctor",
                    params: {
                        doktor_id: id
                    }
                }
            }),
            provideTags: ["Doctors"],
        }),
    }),
});

export const { useDoctorsQuery, useDoctorsDetailQuery } = doctorsApi;
