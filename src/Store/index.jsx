import { configureStore } from '@reduxjs/toolkit'

import AuthStore from './AuthStore';
export const store = configureStore({
    reducer: {
        AuthStore,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})