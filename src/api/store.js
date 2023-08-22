import { configureStore } from '@reduxjs/toolkit';
import { doctorsApi } from '../services/doctorsApi';
import { serviceApi } from '../services/servisesApi';
import { contactApi } from '../services/contactsApi';

const store = configureStore({
    reducer: {
        [doctorsApi.reducerPath]: doctorsApi.reducer,
        [serviceApi.reducerPath]: serviceApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(doctorsApi.middleware, serviceApi.middleware, contactApi.middleware),
});

export default store;