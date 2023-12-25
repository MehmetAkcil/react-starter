import { configureStore } from '@reduxjs/toolkit'
import AuthStore from './AuthStore.js';


export const store = configureStore({
    reducer: {
        AuthStore
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})