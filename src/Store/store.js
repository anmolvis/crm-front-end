import { configureStore } from '@reduxjs/toolkit'
import authReducersStore from './Feature.store.js/Auth/auth.reducers.store'

export const store = configureStore({
    reducer: {
        auth: authReducersStore
    },
})