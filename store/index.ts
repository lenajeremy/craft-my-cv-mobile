import authApi from "@/http/authApi";
import { configureStore } from "@reduxjs/toolkit";

const middleware = [
    authApi.middleware
]

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    reducer: {
        [authApi.reducerPath]: authApi.reducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch